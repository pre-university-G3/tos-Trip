import React, { useEffect, useState } from 'react';
import getData from '../../services/get/getData';

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await getData('places');
        console.log('Fetched places:', data);
        setPlaces(data);
      } catch (error) {
        console.error('Error fetching places:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Places</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {places.map((place) => (
            <div key={place.id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{place.name}</h2>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Places;
