import React, { useEffect, useState } from 'react';
import getData from '../../services/get/getData';
import Hero from '../../components/layouts/banner/Hero';
import { CardPlace } from '../../components/places/CardPlace';

const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    async function getCategories() {
      const data = await getData("places");
      console.log("Fetched Data:", data);
      if (Array.isArray(data)) {
        setPlaces(data);
      } else {
        console.error("Error: API responsed is not an array", data);
      }
    }
    getCategories();
  }, []);

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8 font-[Suwannaphum]">
      <div className='mb-10'>
        <Hero />
      </div>
      <section className='mb-8'>
        <CardPlace />
        {places.length > 0 ? (
          <ul className='mb-5'>
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
      </section>
    </div>
  );
}

export default Home;
