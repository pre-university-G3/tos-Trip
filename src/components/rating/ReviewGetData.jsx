import { Blockquote } from "flowbite-react";
import { useEffect, useState } from "react";
import getData from "../../services/get/getData";
import { useParams } from "react-router";

export function ReviewGetData() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const param = useParams();
  console.log(reviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getData("reviews"); // Fetch all reviews
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
  }, [placeUuid]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (reviews.length === 0) return <p>No reviews for this place.</p>;

  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <Blockquote key={index} className="text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{review.review}</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Rating: {review.rating} / 5
          </p>
        </Blockquote>
      ))}
    </div>
  );
}
