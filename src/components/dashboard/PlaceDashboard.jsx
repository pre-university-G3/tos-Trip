import React, { useEffect, useState } from "react";
import getData from "../../services/get/getData";
import { Link } from "react-router";
import DeletePlace from "./DeletePlace";

const PlaceDashboard = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const stats = [
    {
      icon: "📍", 
      label: "ទីកន្លែងសរុប",
      value: places.length,
      growth: `+${places.length}`,
    },
    {
      icon: "🏕️", 
      label: "ទីកន្លែងពេញនិយម",
      value: places.filter((place) => place.reviews?.some(review => review.rating === 4)).length,
      growth: `+${places.filter((place) => place.reviews?.some(review => review.rating === 4)).length}`,
    },
    {
      icon: "🌳", 
      label: "ទីកន្លែងថ្មី",
      value: places.filter((place) => {
        const placeCreatedAt = new Date(place.createdAt);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return placeCreatedAt >= thirtyDaysAgo;
      }).length,
      growth: `+${places.filter((place) => {
        const placeCreatedAt = new Date(place.createdAt);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return placeCreatedAt >= thirtyDaysAgo;
      }).length}`,
    },
  ];

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await getData("places");
        if (data) {
          setPlaces(data);

         
          const uniqueCategories = [
            ...new Set(data.map((place) => place.category.name)),
          ];
          setCategories(uniqueCategories);
        } else {
          setError("No data available.");
        }
      } catch (error) {
        console.error("Error fetching places:", error);
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

  const filteredAndSearchedPlaces = filteredPlaces.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.category.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || place.category.name === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
    <div className="min-h-screen bg-gray-100 p-6 font-[Suwannaphum]">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">ការគ្រប់គ្រងទីកន្លែង</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-green-600 text-sm">{stat.growth} កាលពីម្សិលមិញ</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Place Button */}
      <div className="flex justify-end my-10">
        <Link to="/admin/AppPlace">
          <div className="px-5 py-2 bg-blue-500 hover:bg-blue-600 flex justify-end rounded-md text-white cursor-pointer">
            <p>បន្ថែមទីកន្លែង +</p>
          </div>
        </Link>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="ស្វែងរកទីកន្លែង..."
            className="border border-gray-300 p-3 rounded-md shadow-sm w-full sm:w-1/3"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="border border-gray-300 p-2 rounded-md shadow-sm w-full sm:w-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">30ថ្ងៃចុងក្រោយ (ទាំងអស់)</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Places Table */}
        <table className="w-full text-left border-collapse table-auto bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr className="text-sm font-semibold">
              <th className="py-3 px-6 text-left">ឈ្មោះ</th>
              <th className="px-6 text-left">ពិពណ៌នា</th>
              <th className="px-6 text-left">ប្រភេទ</th>
              <th className="px-6 text-left">រូបភាព</th>
              <th className="px-6 text-center">កែ/លុប</th>
            </tr>
          </thead>
          <tbody>
            {limitedPlaces.map((place, idx) => (
              <tr
                key={idx}
                className="border-b border-zinc last:border-none hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 text-sm text-gray-800 font-medium">{place.name}</td>
                <td className="px-6 text-sm text-gray-700">
                  {place.description.length > 50
                    ? place.description.substring(0, 50) + "..."
                    : place.description}
                </td>
                <td className="px-6 text-sm text-gray-700">{place.category.name}</td>
                <td className="px-6 h-10">
                  <img
                    src={place.imageUrls[0]}
                    alt={place.name}
                    className="w-full h-full object-cover rounded-md shadow-sm"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-center space-x-2 flex justify-center items-center">
                  <Link
                    className="px-4 py-2 bg-Primary cursor-pointer hover:bg-[#d4c186] text-white text-xs rounded-md transition-colors"
                    to={`/admin/AppPlace/${place.uuid}`}
                  >
                    <p>Edit</p>
                  </Link>
                  <DeletePlace placeUuid={place.uuid} />
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
