import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import getData from "../../services/get/getData";

const Rating = () => {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    async function fetchRating() {
      try {
        const data = await getData("reviews"); 
        // console.log(data);
        if (data && Array.isArray(data) && data.length > 0) {
          setRating(data.rating); 
        }
      } catch (error) {
        console.error("Error fetching rating:", error);
      }
    }
    fetchRating();
  }, []);
  return (
    <div className="flex items-center mt-5">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`transition-colors ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
          size={18}
        />
      ))}
      <p className="px-1 ml-3 text-white text-center text-[14px] bg-Primary rounded">
        {rating}/5
      </p>
    </div>
  );
};

export default Rating;
