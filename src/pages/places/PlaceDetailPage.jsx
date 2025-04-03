import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getData from '../../services/get/getData';

const PlaceDetailPage = () => {
  const [place, setPlace] = useState({});
  const param = useParams(); 
  useEffect(() => {
    async function fetchPlace() {
      try {
        const data = await getData(`places/${param.uuid}`);
        console.log("Rin",data);
        setPlace(data);
      } catch (error) {
        console.error('Error fetching place data:', error);
      }
    }
    
      fetchPlace();
    
  },[param.uuid]);
  return (
    <div>
      {place.imageUrls && place.imageUrls.length > 0 && (
        <img src={place.imageUrls[0]} alt={place.name} />
      )}
      <h1>{place.name}</h1>
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceDetailPage;
