import React, { useEffect, useState } from 'react';
import getData from '../../services/get/getData';

const Home = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const data = await getData("places"); 
      console.log("Fetched Data:", data); // ✅ Debug API response

      if (Array.isArray(data)) {
        setPlaces(data); // ✅ Use the array directly
      } else {
        console.error("Error: API response is not an array", data);
      }
    }
    getCategories();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {places.length > 0 ? (
        <ul>
          {places.map((place) => (
            <li key={place.id}>
              <h2>{place.name}</h2>
              <p>{place.description}</p>
              <p><strong>Category:</strong> {place.category.name}</p>
              <img src={place.imageUrls[0]} alt={place.name} width="200" />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;
