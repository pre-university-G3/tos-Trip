import { Card } from "flowbite-react";

import React, { useEffect, useState } from "react";
import getData from "../../services/get/getData";
import Rating from "../rating/Rating";

export function CardPlace() {
  const [places, setPlaces] = useState([]);
  const [ratings, setRatings] = useState({}); 

  useEffect(() => {
    async function fetchPlaces() {
      const data = await getData("places");
      console.log("Fetched Data:", data);
      if (Array.isArray(data)) {
        setPlaces(data);
      } else {
        console.error("Error: API response is not an array", data);
      }
    }
    fetchPlaces();
  }, []);



  return (
    <section className="flex flex-wrap gap-4 bg-white mt-5">
      {places.map((place) => (
        <Card key={place.id} className="max-w-sm bg-white shadow-lg">
          <img
            className="rounded-t-lg  object-cover"
            src={place.imageUrls[0] || "https://eacnews.asia/uploads/images/10265/EAC-NEWS-2022-03-17.png"} 
            alt={place.name}
          />
          <div className="p-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              {place.name || "no place"}
            </h5>
            <p className="font-normal text-gray-700 line-clamp-3">{place.description || "no description"}</p>
            <Rating />
          </div>
        </Card>
      ))}
    </section>
  );
}
