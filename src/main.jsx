import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import AvailableFlights from "./pages/AvailableFlights.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Sucess from "./pages/Sucess.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Error from "./pages/Error.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="*" element={<Error />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="available-flights" element={<AvailableFlights />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="about" element={<h1 className="text-center text-4xl text-blue-600 font-bold">About page</h1>}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="success" element={<Sucess />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
