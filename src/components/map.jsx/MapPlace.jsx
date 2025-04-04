import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const MapPlace = () => {
  const [map, setMap] = useState(null);
  const param = useParams();
  useEffect(() => {
    async function fetchMap() {
      const data = await getData(`places/${param.uuid}`);
      setMap(data);
      console.log(data);
    }
    fetchMap();
  }, [param.uuid]);
  return (
    <div>MapPlace</div>
  )
}

export default MapPlace
