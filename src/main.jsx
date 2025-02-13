import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import AvailableFlights from "./pages/AvailableFlights.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />}></Route>
          <Route path="available" element={<AvailableFlights />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
