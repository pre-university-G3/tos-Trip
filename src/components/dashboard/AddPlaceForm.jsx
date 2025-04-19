import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  openHours: Yup.string().required("Open hours are required"),
  entryFee: Yup.number()
    .required("Entry fee is required")
    .min(0, "Entry fee must be zero or a positive number"),
  latitude: Yup.number().required("Latitude is required").min(-90).max(90, "Latitude must be between -90 and 90"),
  longitude: Yup.number().required("Longitude is required").min(-180).max(180, "Longitude must be between -180 and 180"),
  categoryName: Yup.string().required("Category is required"),
});

const AddPlaceForm = () => {
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [uploading, setUploading] = useState(false);
  const uploadImages = async () => {
    setUploading(true);
    const urls = [];
    try {
      const uploadPromises = images.map(async (image) => {
        const form = new FormData();
        form.append("file", image);
        const res = await fetch("https://tostrip.eunglyzhia.social/api/v1/upload", {
          method: "POST",
          body: form,
        });

        if (!res.ok) throw new Error("Upload failed");

        const data = await res.json();
        console.log("Image upload response:", data);
        return data.uri;
      });

      const imageUrls = await Promise.all(uploadPromises);
      console.log("Uploaded image URLs:", imageUrls);
      return imageUrls;
    } catch (err) {
      console.error("Image upload error:", err);
      alert("Image upload failed. Please try again.");
      return [];
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    const imageUrls = await uploadImages();
    if (imageUrls.length === 0) return;
    const { latitude, longitude, ...rest } = values;
    const placeData = {
      ...rest,
      latitude,
      longitude,
      location: `${latitude},${longitude}`,
      imageUrls,
    };

    try {
      console.log("Submitting placeData:", placeData);
      const response = await fetch("https://tostrip.eunglyzhia.social/api/v1/places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(placeData),
        mode: "cors",
      });
      const responseData = await response.json();
      console.log("API Response:", responseData);
      alert("ទីកន្លែងបានបញ្ចូនដោយជោគជ័យ!");
      resetForm();
      setImages([]);
      setPreviewUrls([]);
    } catch (err) {
      alert("មានបញ្ហាពេលបញ្ចូនទិន្នន័យ");
      console.error("Error details:", err);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(previews);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md font-[Suwannaphum] mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">បន្ថែមទីកន្លែងថ្មី</h2>

      <Formik
        initialValues={{
          name: "",
          description: "",
          openHours: "",
          entryFee: 0.0,
          latitude: "",
          longitude: "",
          categoryName: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="space-y-4  ">
            <Field
              name="name"
              placeholder="ឈ្មោះទីកន្លែង"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Primary shadow-sm"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />

            <Field
              as="textarea"
              name="description"
              placeholder="ពិពណ៌នាអំពីទីកន្លែង"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Primary shadow-sm"
              rows="4"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm"
            />
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="w-full sm:w-1/2">
                <Field
                  name="openHours"
                  placeholder="ម៉ោងបើក"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Primary shadow-sm"
                />
                <ErrorMessage
                  name="openHours"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <Field
                  name="entryFee"
                  type="number"
                  step="0.01"
                  placeholder="ថ្លៃចូល"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Primary shadow-sm"
                />
                <ErrorMessage
                  name="entryFee"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mt-4">
              <div className="w-full sm:w-1/2">
                <Field
                  name="latitude"
                  placeholder="Latitude"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Primary shadow-sm"
                />
                <ErrorMessage
                  name="latitude"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <Field
                  name="longitude"
                  placeholder="Longitude"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Primary shadow-sm"
                />
                <ErrorMessage
                  name="longitude"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <input
              type="text"
              value={`${values.latitude},${values.longitude}`}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
              placeholder="Location"
            />

            <Field
              as="select"
              name="categoryName"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Primary shadow-sm bg-white"
            >
              <option value="">ជ្រើសរើសប្រភេទ</option>
              <option value="តំបន់ប្រាសាទ">តំបន់ប្រាសាទ</option>
              <option value="តំបន់កោះ">តំបន់កោះ</option>
              <option value="តំបន់ភ្នំ">តំបន់ភ្នំ</option>
              <option value="តំបន់វាលរាប">តំបន់វាលរាប</option>
              <option value="ទីក្រុង">ទីក្រុង</option>
            </Field>
            <ErrorMessage
              name="categoryName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />

            <div className="space-y-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-Primary transition-colors cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="images"
                  multiple
                />
                <label
                  htmlFor="images"
                  className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
                >
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-gray-600">
                    Drag & Drop or click to upload <br />
                    <span className="font-semibold">Images</span>
                  </p>
                </label>
              </div>
            </div>

            {previewUrls.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {previewUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`preview-${index}`}
                    className="w-full h-32 object-cover rounded-md"
                  />
                ))}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-Primary text-white py-2 rounded disabled:opacity-50"
              disabled={uploading}
            >
              {uploading ? (
                <span className="animate-spin">⏳</span>
              ) : (
                "បញ្ជូន"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPlaceForm;
