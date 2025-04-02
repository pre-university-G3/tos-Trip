import React, { useEffect, useState } from "react";
import getData from "../../services/get/getData";

const PopularPlaces = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    async function fetchPlaces() {
      const data = await getData("places");
      console.log("Fetched Data:", data);
      setPopular(data);
    }
    fetchPlaces();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 sm:gap-8">
      {popular.slice(0, 8).map((place, index) => (
        <img
          key={index}
          alt={place.name}
          className="aspect-video rounded-lg object-cover w-full"
          src={place.imageUrls[1]}
        />
      ))}
    </div>
  );
};

export default PopularPlaces;
