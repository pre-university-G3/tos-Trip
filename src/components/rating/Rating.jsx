import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import getData from "../../services/get/getData";

const Rating = () => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    async function fetchRating() {
      const data = await getData("reviews");

      if (Array.isArray(data) && data.length > 0) {
        const total = data.reduce((sum, review) => sum + review.rating, 0);
        const average = total / data.length;
        setAverageRating(Math.round(average)); // round to integer here
      }
    }

    fetchRating();
  }, []);

  return (
    <div className="flex items-center mt-5">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`text-xl ${index < averageRating ? "text-yellow-400" : "text-gray-300"
            }`}
        />
      ))}
      <span className="ml-2 text-[12px] px-2 py-1 rounded bg-Primary text-white ">
        {averageRating} / 5
      </span>

    </div>
  );
};

export default Rating;
