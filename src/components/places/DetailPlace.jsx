import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getData from "../../services/get/getData";

const DetailPlace = () => {
  const [place, setPlace] = useState(null);
  const { uuid } = useParams();

  useEffect(() => {
    async function fetchPlace() {
      try {
        const data = await getData(`places/${uuid}`);
        console.log("Fetched place data:", data);
        setPlace(data);
      } catch (error) {
        console.error("Error fetching place data:", error);
      }
    }

    fetchPlace();
  }, [uuid]);
  if (!place) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <main className="px-[8%]">
      <h2 className="text-black font-extrabold text-5xl mb-6 ml-3.5 mt-10">
        {place.name}
      </h2>
      <hr />
      <div className="shadow-black  "></div>

      {/* Image Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-6 auto-rows-fr">
        {/* First image: spans 2 rows and 2 cols on md+ */}
        {place.imageUrls?.[0] && (
          <img
            className="h-full w-full object-cover col-span-full md:col-span-2 md:row-span-2 brightness-90 rounded-sm"
            src={place.imageUrls[0]}
            alt={`${place.name} 1`}
          />
          
        )}

        {/* Remaining images */}
        {place.imageUrls?.slice(1, 5).map((url, index) => (
          <img
            key={index}
            className="h-52 w-full object-cover brightness-80 rounded-sm"
            src={url}
            alt={`${place.name} ${index + 2}`}
          />

        
        ))}
      </section>
      {/* Description */}
      <section>
      
        <h2 className="text-black font-extrabold text-5xl mb-6 ml-3.5 mt-20">
          {place.name}
        </h2>
        <hr/>
        <p className="pt-6 text-2xl">{place.description}</p>
       
      </section>
    </main>
  );
};

export default DetailPlace;
