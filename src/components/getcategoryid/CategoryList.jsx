import React, { useEffect, useState } from "react";
import getData from "../../services/get/getData";

export default function CategoryList() {
  const [places, setPlaces] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    async function fetchData() {
      try {
        const [placesData, categoriesData] = await Promise.all([
          getData("places"),
          getData("categories"),
        ]);
        console.log("Fetched categories:", categoriesData); 
        setPlaces(placesData);
        setCategoryList(categoriesData);
        setFiltered(placesData);
      } catch (error) {
        console.error("Error fetching categories or places:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    let list = [...places];

    // Filter by category
    if (selectedCategory) {
      console.log("Filtering by category:", selectedCategory); // Debugging line
      list = list.filter(
        (place) => place.category?.name === selectedCategory
      );
    }

    // Filter by search
    if (search) {
      list = list.filter((place) =>
        place.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting logic
    if (sortBy === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFiltered(list);
  }, [search, selectedCategory, sortBy, places]);

  return (
    <div className="p-6">
      <select
        className="border p-2 rounded w-full sm:w-1/4"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categoryList.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search places..."
        className="border p-2 rounded w-full sm:w-1/3 mt-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {filtered.map((place) => (
          <div key={place.uuid} className="max-w-sm bg-white p-4 rounded-lg shadow-md">
            <img
              src={place.imageUrls?.[0] || "https://via.placeholder.com/150"}
              alt={place.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-lg">{place.name}</h3>
            <p className="text-gray-600">{place.description}</p>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No places found.</p>
      )}
    </div>
  );
}
