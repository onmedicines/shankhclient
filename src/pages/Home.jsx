import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import shankhLogo from "/shankhair-transparent.png";
import { Clock, Scale, SparklesIcon } from "lucide-react";
import CityDropdown from "../components/CityDropdown.jsx";

export default function Home() {
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [journeyData, setJourneyData] = useState({
    to: "",
    from: "",
    date: "",
  });

  useEffect(() => {
    (async function () {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cities`);
      const cities = await response.json();
      setCities(cities);
    })();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      navigate(`available-flights?from=${journeyData.from}&to=${journeyData.to}&date=${journeyData.date}`);
    } catch (err) {}
  };

  return (
    <>
      {/* Hero */}
      <div className="relative h-[600px]">
        <img src="../../images.jpg" alt="Hero" className="object-contain w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-100/80">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xl">
              <h1 className="text-5xl font-bold mb-4">Explore the World with Comfort</h1>
              <p className="text-xl mb-8">Discover new horizons with our premium flight experience</p>
              <Link to={"/login"} className="bg-orange-500 px-8 py-3 mt-32 md:mt-0 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Flights */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <CityDropdown label="From" placeholder="Enter city name" value={journeyData.from} onChange={(code) => setJourneyData((prev) => ({ ...prev, from: code }))} cities={cities} />
            <CityDropdown label="To" placeholder="Enter city name" value={journeyData.to} onChange={(code) => setJourneyData((prev) => ({ ...prev, to: code }))} cities={cities} />
            <div className="space-y-2">
              <label className="block text-blue-900 font-medium">Date</label>
              <input type="date" onChange={({ target }) => setJourneyData((prev) => ({ ...prev, date: target.value }))} value={journeyData.date} className="w-full p-2 border border-blue-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors">Search Flights</button>
            </div>
          </form>
        </div>
      </div>

      {/* Destinations */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Destination Card 1 --> */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-64">
              <img src="/paris.jpg" alt="Paris" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Paris</h3>
                <p className="text-orange-300">From $299</p>
              </div>
            </div>
          </div>
          {/* <!-- Destination Card 2 --> */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-64">
              <img src="/tokyo.jpg" alt="Tokyo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Tokyo</h3>
                <p className="text-orange-300">From $599</p>
              </div>
            </div>
          </div>
          {/* <!-- Destination Card 3 --> */}
          <div className="rounded-xl overflow-hidden shadow-lg group">
            <div className="relative h-64">
              <img src="/dubai.webp" alt="Dubai" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Dubai</h3>
                <p className="text-orange-300">From $399</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Services --> */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Fly With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-200">Round-the-clock assistance for all your travel needs</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Scale />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-blue-200">Competitive fares and regular promotions</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <SparklesIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comfort First</h3>
              <p className="text-blue-200">Premium comfort across all flight classNamees</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Newsletter --> */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-orange-100 rounded-xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Stay Updated</h2>
            <p className="text-blue-700 mb-6">Subscribe to our newsletter for exclusive deals and travel tips</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg flex-grow max-w-md border-2 border-orange-400" />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
