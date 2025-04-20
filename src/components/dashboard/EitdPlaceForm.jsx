import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  openHours: Yup.string().required("Open hours are required"),
  entryFee: Yup.number().required("Entry fee is required").min(0),
  latitude: Yup.number().required("Latitude is required").min(-90).max(90),
  longitude: Yup.number().required("Longitude is required").min(-180).max(180),
  categoryName: Yup.string().required("Category is required"),
});

const EditPlaceForm = () => {
  const { placeUuid } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await fetch(`https://tostrip.eunglyzhia.social/api/v1/places/${placeUuid}`);
        const data = await res.json();
        const [lat, lng] = data.location.split(",");
        setInitialValues({
          name: data.name,
          description: data.description,
          openHours: data.openHours,
          entryFee: data.entryFee,
          latitude: lat,
          longitude: lng,
          categoryName: data.categoryName,
        });
      } catch (err) {
        console.error("Failed to fetch place:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlace();
  }, [placeUuid]);

  const handleSubmit = async (values) => {
    const placeData = {
      ...values,
      location: `${values.latitude},${values.longitude}`,
    };

    try {
      const response = await fetch(`https://tostrip.eunglyzhia.social/api/v1/places/${placeUuid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(placeData),
      });

      if (!response.ok) throw new Error("Failed to update");

      alert("បានកែប្រែដោយជោគជ័យ!");
    } catch (err) {
      alert("បរាជ័យក្នុងការកែប្រែ");
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-10">កំពុងទាញយកទិន្នន័យ...</p>;
  if (!initialValues) return <p className="text-center text-red-500">មិនអាចទាញយកទិន្នន័យបានទេ</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md font-[Suwannaphum] mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">កែប្រែទីកន្លែង</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <Form className="space-y-4">
            <Field name="name" placeholder="ឈ្មោះទីកន្លែង" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Primary shadow-sm" />
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

            <Field as="select" name="categoryName" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Primary shadow-sm bg-white">
              <option value="">ជ្រើសរើសប្រភេទ</option>
              <option value="តំបន់ប្រាសាទ">តំបន់ប្រាសាទ</option>
              <option value="តំបន់កោះ">តំបន់កោះ</option>
              <option value="តំបន់ភ្នំ">តំបន់ភ្នំ</option>
              <option value="តំបន់វាលរាប">តំបន់វាលរាប</option>
              <option value="ទីក្រុង">ទីក្រុង</option>
            </Field>
            <ErrorMessage name="categoryName" component="div" className="text-red-500 text-sm" />

            <button type="submit" className="w-full bg-Primary text-white py-2 rounded">
              <Link to={'/admin/place'}>កែប្រែ</Link>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditPlaceForm;
