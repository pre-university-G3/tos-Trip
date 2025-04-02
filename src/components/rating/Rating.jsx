import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(0); // Use a single rating state instead of an object
  const handleRating = (star) => {
    setRating(star);
  };
  return (
    <div className="flex items-center mt-5">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer transition-colors ${
            rating >= star ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => handleRating(star)}
          size={18}
        />
      ))}
      <p className="px-1 ml-3 text-white text-center text-[14px] bg-Primary rounded">{rating}/5</p>
    </div>
  );
};

export default Rating;
