import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export default function AvailableFlights() {
  const [searchParams] = useSearchParams();
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchFlights() {
      try {
        const citiesRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cities`);
        const cities = await citiesRes.json();
        setCities(cities);

        const from = searchParams.get("from");
        const to = searchParams.get("to");
        const date = searchParams.get("date");

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/flights?from=${from}&to=${to}&date=${date}`);

        if (!response.ok) {
          throw new Error("Failed to fetch flights");
        }

        const availableFlights = await response.json();
        setFlights(availableFlights);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchFlights();
  }, [searchParams]); // Add searchParams to dependency array

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Available Flights</h1>
      <div className="space-y-4">
        {flights.length > 0 ? (
          flights.map((flight) => (
            <div key={flight._id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-blue-600 font-medium">From</p>
                  <p className="text-lg font-semibold text-blue-900">{cities.find((city) => city.code === flight.from).city}</p>
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium">To</p>
                  <p className="text-lg font-semibold text-blue-900">{cities.find((city) => city.code === flight.to).city}</p>
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium">Date</p>
                  <p className="text-lg font-semibold text-blue-900">{flight.date}</p>
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium">Time</p>
                  <p className="text-lg font-semibold text-blue-900">{flight.time} hrs</p>
                </div>
                <div className="md:col-span-4">
                  <button className="w-full md:w-auto bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">Book Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <p className="text-blue-900 font-medium">No flights available</p>
          </div>
        )}
      </div>
    </div>
  );
}
