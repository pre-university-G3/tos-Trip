import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import getData from "../../services/get/getData";

const Rating = () => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    async function fetchRating() {
      try {
        const data = await getData("reviews/average"); // ផ្លូវ API ត្រូវតែផ្តល់ rating ជាស្រាប់
        if (data && data.averageRating !== undefined) {
          setAverageRating(Math.round(data.averageRating)); // បើតម្លៃមានក្រិតទសភាគ
        }
      } catch (err) {
        console.error("Failed to fetch rating:", err);
      }
    }

    fetchRating();
  }, []);

  return (
    <div className="flex items-center mt-5">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`text-[16px] ${
            index < averageRating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-[10px] px-2 py-1 rounded bg-Primary text-white ">
        {averageRating} / 5
      </span>
    </div>
  );
};

export default Rating;
