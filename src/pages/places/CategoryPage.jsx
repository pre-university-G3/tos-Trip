import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import getData from "../../services/get/getData";
import { Card } from "flowbite-react";
import Rating from "../../components/rating/Rating";

const CategoryPage = () => {
  const { uuid } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    async function fetchPlace() {
      try {
        const data = await getData(`categories/${uuid}`);
        console.log("Fetched place data:", data);
        setCategory(data);
      } catch (error) {
        console.error("Error fetching place data:", error);
      }
    }

    fetchPlace();
  }, [uuid]);

  if (!category) {
    return <div className="p-6 text-gray-600">Loading...</div>;
  }
  return (
    <div className="p-6 sm:p-10 px-[5%] w-full">
      <div className="flex flex-col justify-center items-center mb-6 w-full">
        {category?.places?.[0]?.imageUrls?.[0] && (
          <div
            className="relative rounded-lg mb-6 w-full h-[250px] sm:h-[400px] md:h-[500px]"
            style={{
              backgroundImage: `url(${category.places[0].imageUrls[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0  grayscale-25 rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center px-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
                {category.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-Secondary max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
          </div>
        )}
      </div>

      <hr className="my-8 border-t border-gray-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.places.map((place, index) => (
          <Card key={index}>
            <Link to={`/place/${place.uuid}`}>
              <img
                className="rounded-t-lg object-cover h-48 w-full"
                src={
                  place.imageUrls[0] ||
                  "https://eacnews.asia/uploads/images/10265/EAC-NEWS-2022-03-17.png"
                }
                alt={place.name}
              />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{place.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-3 mb-2">
                {place.description}
              </p>
              <Rating />
            </div>
          </Card>
        ))}
      </div>
    </div>

  );
};

export default CategoryPage;
