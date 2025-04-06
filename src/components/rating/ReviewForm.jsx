import React, { useState } from "react";
import postData from "../../services/post/postData"; // adjust the path as needed
import { useParams } from "react-router";

const ReviewForm = () => {
  const param = useParams();
  console.log('param', param);
  const [formData, setFormData] = useState({
    placeUuid: param.uuid,
    userUuid:'123345Rin' ,
    rating: 5,
    review: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await postData("reviews", formData);
      console.log("Response:", response);
      setMessage("✅ Review submitted successfully!");
      setFormData({
        placeUuid: "",
        userUuid: "",
        rating: 5,
        review: ""
      });
    } catch (err) {
      console.error("Submission failed:", err);
      setMessage(" Failed to submit review.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="  bg-white shadow-md rounded-lg py-10 px-10 my-10  space-y-4"
    >
      <h2 className="text-xl font-bold">Leave a Review</h2>

      {/* <input
        type="text"
        name="placeUuid"
        placeholder="Place UUID"
        value={formData.placeUuid}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="userUuid"
        placeholder="User UUID"
        value={formData.userUuid}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      /> */}
      <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        value={formData.rating}
        onChange={handleChange}
        min={1}
        max={5}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="review"
        placeholder="Write your review..."
        value={formData.review}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        rows={4}
        required
      ></textarea>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
};

export default ReviewForm;
