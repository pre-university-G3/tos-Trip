
import React, { useEffect, useState } from 'react';
import getData from '../../services/get/getData';

const Place = () => {
   const [places, setPlaces] = useState([]);
   const [category, setCategory] = useState([]);
  
    useEffect(() => {
      async function getCategories() {
        const data = await getData("places"); 
        const categories = await getData("categories");
        console.log("Fetched Data:", data); 
        console.log("Fetched Data:",categories ); 
        
        if (Array.isArray(data)) {
          setPlaces(data); 
          setCategory(categories);
        } else {
          console.error("Error: API response is not an array", data);
        }
      }
      getCategories();
    }, []);
  
  return (
    <div>
      {places.length > 0 ? (
        <ul>
          {places.map((place) => (
            <li key={place.id}>
              <h2 className='text-black font-extrabold text-5xl mb-6 ml-3.5 mt-10'>{place.name}</h2>
              <hr />
              <section className='flex'>
              <img className='mt-5' src={place.imageUrls[0]} alt={place.name} width="600" height="600" />
              <p className='p-20 text-2xl'>{place.description}</p>
              {/* <p> {place.category.name}</p> */}
              </section>
              <section className='flex mt-15'>
              <p className='pt-20 text-2xl'>{place.description}</p>
              <img src={place.imageUrls[1]} alt={place.name} width="600" height="600" />
              {/* <p> {place.category.name}</p> */}
              </section >
              <section className='flex gap-6 mt-30'>
              <img src={place.imageUrls[2]} alt={place.name} width="600" height="600" />
              <img src={place.imageUrls[3]} alt={place.name} width="600" height="600" />
              <img src={place.imageUrls[4]} alt={place.name} width="600" height="600" />
              </section>
              <section className='mt-30'>
              <h2 className='text-black font-extrabold text-3xl mb-3 ml-3.5'>{place.name}</h2>
              <hr />
              <p className=' mt-5 mb-5 text-2xl '>{place.description}</p>

              </section>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  )
}

export default Place
