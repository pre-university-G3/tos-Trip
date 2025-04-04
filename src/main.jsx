import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import About from "./pages/about/About.jsx";
import Place from "./pages/places/Place.jsx";
import Home from "./pages/home/Home.jsx";

import PlaceDetailPage from "./pages/places/PlaceDetailPage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<Place />} />
          <Route path="/place/:uuid" element={<PlaceDetailPage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/category/:uuid" element={<About />} /> */}
          
          {/* <Route
            path="/products/categories/:uuid"
            element={<ProductCategoriesPage />}
          /> */}
        </Route>
        {/* login */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
