import { Navigate, Outlet } from "react-router";
import { useState, useEffect } from "react";

export default function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/validate-token`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        setIsAuthenticated(true);
      } catch (error) {
        console.error("Authentication error:", error);
        setIsAuthenticated(false);
        // Optionally clear the invalid token
        localStorage.removeItem("token");
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or a proper loading component
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
