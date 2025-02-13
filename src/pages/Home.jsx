import React from "react";
import { Link } from "react-router";
import shankhLogo from "/shankhair-transparent.png";

export default function Home() {
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
      <div class="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div class="bg-white rounded-xl shadow-xl p-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="space-y-2">
              <label class="block text-blue-900 font-medium">From</label>
              <input type="text" class="w-full p-2 border border-blue-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
            </div>
            <div class="space-y-2">
              <label class="block text-blue-900 font-medium">To</label>
              <input type="text" class="w-full p-2 border border-blue-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
            </div>
            <div class="space-y-2">
              <label class="block text-blue-900 font-medium">Date</label>
              <input type="date" class="w-full p-2 border border-blue-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500" />
            </div>
            <div class="flex items-end">
              <button class="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors">Search Flights</button>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations */}
      <div class="max-w-7xl mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-blue-900 mb-8">Popular Destinations</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Destination Card 1 --> */}
          <div class="rounded-xl overflow-hidden shadow-lg group">
            <div class="relative h-64">
              <img src="../../public/paris.jpg" alt="Paris" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div class="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">Paris</h3>
                <p class="text-orange-300">From $299</p>
              </div>
            </div>
          </div>
          {/* <!-- Destination Card 2 --> */}
          <div class="rounded-xl overflow-hidden shadow-lg group">
            <div class="relative h-64">
              <img src="../../public/tokyo.jpg" alt="Tokyo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div class="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">Tokyo</h3>
                <p class="text-orange-300">From $599</p>
              </div>
            </div>
          </div>
          {/* <!-- Destination Card 3 --> */}
          <div class="rounded-xl overflow-hidden shadow-lg group">
            <div class="relative h-64">
              <img src="../../public/dubai.webp" alt="Dubai" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div class="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">Dubai</h3>
                <p class="text-orange-300">From $399</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Services --> */}
      <div class="bg-blue-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-center">Why Fly With Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">24/7 Support</h3>
              <p class="text-blue-200">Round-the-clock assistance for all your travel needs</p>
            </div>
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Best Prices</h3>
              <p class="text-blue-200">Competitive fares and regular promotions</p>
            </div>
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Comfort First</h3>
              <p class="text-blue-200">Premium comfort across all flight classes</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Newsletter --> */}
      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="bg-orange-100 rounded-xl p-8 md:p-12">
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-blue-900 mb-4">Stay Updated</h2>
            <p class="text-blue-700 mb-6">Subscribe to our newsletter for exclusive deals and travel tips</p>
            <div class="flex flex-col md:flex-row gap-4 justify-center">
              <input type="email" placeholder="Enter your email" class="px-4 py-2 rounded-lg flex-grow max-w-md border-2 border-orange-400" />
              <button class="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <footer class="bg-blue-900 text-white">
        <div class="max-w-7xl mx-auto px-4 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="bg-gray-100 w-fit p-2 mb-2">
                <img src={shankhLogo} width={"100"} alt="shankh logo" />
              </div>
              <p class="text-blue-200">Your trusted travel partner since 2024</p>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2 text-blue-200">
                <li>
                  <a href="#" class="hover:text-orange-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-300">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Support</h4>
              <ul class="space-y-2 text-blue-200">
                <li>
                  <a href="#" class="hover:text-orange-300">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-300">
                    Baggage Info
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-orange-300">
                    Travel Insurance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4">Connect</h4>
              <div class="flex space-x-4">
                <a href="#" class="bg-orange-500 p-2 rounded-full hover:bg-orange-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
