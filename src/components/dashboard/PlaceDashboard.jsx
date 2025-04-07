import React, { useEffect, useState } from "react";
import getData from "../../services/get/getData";
import { Link } from "react-router";
const PlaceDashboard = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await getData('places');
        if (data) {
          setPlaces(data);
        } else {
          setError("No data available.");
        }
      } catch (error) {
        console.error('Error fetching places:', error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchPlaces();
  }, []);


  useEffect(() => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentPlaces = places.filter((place) => {
      const placeCreatedAt = new Date(place.createdAt);
      return placeCreatedAt >= thirtyDaysAgo;
    });

    setFilteredPlaces(recentPlaces);
  }, [places]);

  const filteredAndSearchedPlaces = filteredPlaces.filter((place) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    place.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    place.category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const limitedPlaces = filteredAndSearchedPlaces.slice(0, 10);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-4">
        <div className="border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }


  if (error) {
    return <div className="text-center py-4 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">ការគ្រប់គ្រងទីកន្លែង</h1>
      <div className="flex justify-end my-10">
        <Link to="/admin/AppPlace " >
          <button className="px-5 py-2  bg-Primary flex justify-end rounded-md text-white cursor-pointer">បន្ថែមទីកន្លែង</button>
        </Link>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <select className="border border-gray-300 p-2 rounded-md shadow-sm w-full sm:w-auto">
            <option>30ថ្ងៃចុងក្រោយ</option>
          </select>
          <input
            type="text"
            placeholder="ស្វែងរកទីកន្លែង..."
            className="border border-gray-300 p-2 rounded-md shadow-sm w-full sm:w-1/3"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <table className="w-full text-left border-collapse table-auto bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr className="text-sm font-semibold">
              <th className="py-3 px-6 text-left">ឈ្មោះ</th>
              <th className="px-6 text-left">ពិពណ៌នា</th>
              <th className="px-6 text-left">ប្រភេទ</th>
              <th className="px-6 text-left">រូបភាព</th>
              <th className="px-6 text-center">អនុកម្ម</th>
            </tr>
          </thead>
          <tbody>
            {limitedPlaces.map((place, idx) => (
              <tr
                key={idx}
                className="border-b last:border-none hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 text-sm text-gray-800 font-medium">{place.name}</td>
                <td className="px-6 text-sm text-gray-700">
                  {place.description.length > 50
                    ? place.description.substring(0, 50) + "..."
                    : place.description}
                </td>
                <td className="px-6 text-sm text-gray-700">{place.category.name}</td>
                <td className="px-6  h-10">
                  <img
                    src={place.imageUrls[0]}
                    alt={place.name}
                    className="w-full h-full object-cover rounded-md shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-center space-x-2">
                  <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-xs transition-colors">
                    Edit
                  </button>
                  <button className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md text-xs transition-colors">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default PlaceDashboard;
