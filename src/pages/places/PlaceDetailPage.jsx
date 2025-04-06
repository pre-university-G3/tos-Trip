import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getData from '../../services/get/getData';
import MapPlace from '../../components/map/MapPlace';

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
        console.error('Error fetching place data:', error);
      }
    }

    fetchPlace();
  }, [uuid]);

  if (!place) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-black font-extrabold text-5xl mb-6 ml-3.5 mt-10">{place.name}</h2>
      <hr />

      <section className="flex">
        <img className="mt-5" src={place.imageUrls?.[0]} alt={place.name} width="600" height="600" />
        <p className="p-20 text-2xl">{place.description}</p>
      </section>

      <section className="flex mt-15">
        <p className="pt-20 text-2xl">{place.description}</p>
        <img src={place.imageUrls?.[1]} alt={place.name} width="600" height="600" />
      </section>

      <section className="flex gap-6 mt-30">
        {place.imageUrls?.slice(2, 5).map((url, index) => (
          <img key={index} src={url} alt={`${place.name} ${index + 3}`} width="600" height="600" />
        ))}
      </section>

      <section className="mt-30">
        <h2 className="text-black font-extrabold text-3xl mb-3 ml-3.5">{place.name}</h2>
        <hr />
        <p className="mt-5 mb-5 text-2xl">{place.description}</p>
      </section>

      <section className='px-[8%]'><MapPlace /></section>
      

    </div>
  );
};

export default PlaceDetailPage;
