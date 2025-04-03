
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
        setCategory(categories);
        setPlaces(data);
      }
      getCategories();
    }, []);
  return (
    <div>
      {
        category.map((item, index) => {
          return (
            <div className='text-zinc-950' key={index}>
              <h1 className='text-xl font-bold tex-rud-500'>{item.name}</h1>
              <p className='text-pink-300'>{item.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Place
