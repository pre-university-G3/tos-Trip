
import { useEffect, useState } from "react";
import getData from "../../services/get/getData";
import { useParams } from "react-router";
import Rating from "./Rating";


export function ReviewGetData() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const param = useParams();
  console.log(reviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getData("reviews");
        console.log("All reviews fetched:", data);

        if (Array.isArray(data)) {
          const filtered = data.filter((review) => review.placeUuid === param.uuid);
          setReviews(filtered);
          console.log("Filtered reviews:", filtered);
        } else {
          setReviews([]);
          console.warn("API returned unexpected data:", data);
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [param.uuid]);
  console.log(reviews);
  console.log("my uuid:", param.uuid);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (reviews.length === 0) return <p>No reviews for this place.</p>;

  return (
    <div className="overflow-y-auto">
      {reviews.map((review, index) => (
        <div key={index} className="text-center bg-Snow p-10 rounded-lg">
          <p className="text-md sm:text-lg md:text-xl font-bold text-heade dark:text-white">
            {review.review}
          </p>
          <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-300 mt-2">
            <Rating />
          </p>
        </div>
      ))}
    </div>

  );
}
