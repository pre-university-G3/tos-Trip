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
import CategoryPage from "./pages/places/CategoryPage.jsx";
import Dashbard from './pages/admin/Dashbord.jsx'
import PlaceMangment from "./pages/admin/PlaceMangment.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<Place />} />
          <Route path="/place/:uuid" element={<PlaceDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:uuid" element={<CategoryPage />} />
          {/* <Route path="/category/:uuid" element={<About />} /> */}
          
        </Route>
        {/* login */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/admin" element={<Dashbard />} />
        <Route path="/admin/place" element={<PlaceMangment />} />
        

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
