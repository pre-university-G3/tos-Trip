import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getData from "../../services/get/getData";

const PlaceDetailPage = () => {
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
    <article className="px-[8%]">
      <h2 className="text-black font-extrabold text-5xl mb-6 ml-3.5 mt-10">
        {place.name}
      </h2>
      <hr />
      <section className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[200px] md:auto-rows-[250px]">
        <img
          className="h-auto w-auto object-cover col-span-4 "
          src={place.imageUrls?.[0]}
          alt={place.name}
        />
        <img
          className="mt-40 h-auto w-auto object-cover col-span-1 "
          src={place.imageUrls?.[1]}
          alt={place.name}
        />
        <img
          className="mt-40 h-auto w-auto object-cover col-span-1 "
          src={place.imageUrls?.[2]}
          alt={place.name}
        />
        <img
          className="mt-40 h-auto w-auto object-cover col-span-1 "
          src={place.imageUrls?.[3]}
          alt={place.name}
        />
        <img
          className="mt-40 h-auto w-auto object-cover col-span-1 "
          src={place.imageUrls?.[4]}
          alt={place.name}
        />
      </section>
      <section>
        <h2 className="text-black font-extrabold text-5xl mb-6 ml-3.5 mt-30">
          {place.name}
        </h2>
        <p className="pt-20 text-2xl">{place.description}</p>
        <hr />
      </section>
    </article>
  );
};

export default PlaceDetailPage;
