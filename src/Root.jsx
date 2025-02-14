import { useState } from "react";
import { Link, Outlet } from "react-router";
import shankhLogo from "/shankhair-transparent.png";
import { Menu, User, X, ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";
import { NavbarContext } from "./context/navbarContext";

function Root() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <div className={`max-w-screen min-h-screen overflow-x-hidden bg-slate-100 flex flex-col ${isMenuVisible ? "max-h-screen overflow-y-hidden" : ""} }`}>
      <nav className="flex justify-between items-center py-4 px-4">
        <div className="md:hidden">
          {isMenuVisible ? (
            <X
              onClick={() => {
                setMenuVisible(false);
              }}
            />
          ) : (
            <Menu
              onClick={() => {
                setMenuVisible(true);
              }}
            />
          )}
        </div>
        <Link to={"/"} onClick={() => setMenuVisible(false)}>
          <img src={shankhLogo} width={"100"} alt="shankh logo" />
        </Link>
        <ul className="flex space-x-12 hidden md:flex">
          <Link to="/" className="flex items-center justify-between">
            <li className="text-md text-sky-600 font-semibold hover:text-sky-700 transition-colors duration-200">Home</li>
          </Link>
          <Link to="/about" className="flex items-center justify-between">
            <li className="text-md text-sky-600 font-semibold hover:text-sky-700 transition-colors duration-200">About us</li>
          </Link>
          <Link to="/" className="flex items-center justify-between">
            <li className="text-md text-sky-600 font-semibold hover:text-sky-700 transition-colors duration-200">Search Flights</li>
          </Link>
          <Link to={"/login"}>
            <User className="w-7 h-7 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 rounded-full p-1 text-gray-100" />
          </Link>
        </ul>
      </nav>
      <main className={`relative min-w-screen flex-grow`}>
        {/* Nav menu */}
        <div className={`md:hidden z-100 absolute top-0 left-0 w-full h-screen overflow-y-scroll bg-slate-100 transition-transform duration-300 flex flex-col justify-between p-4 ${isMenuVisible ? "transform translate-x-0" : "transform -translate-x-full"}`}>
          <ul className="flex flex-col gap-6 list-disk py-8 px-4">
            <Link to="/" onClick={() => setMenuVisible(false)} className="flex items-center justify-between">
              <li className="text-xl text-sky-600 font-semibold">Home</li>
              <ChevronRight className="text-sky-600 " />
            </Link>
            <Link to="/login" onClick={() => setMenuVisible(false)} className="flex items-center justify-between">
              <li className="text-xl text-sky-600 font-semibold">Login</li>
              <ChevronRight className="text-sky-600 " />
            </Link>
            <Link to="/register" onClick={() => setMenuVisible(false)} className="flex items-center justify-between">
              <li className="text-xl text-sky-600 font-semibold">Register</li>
              <ChevronRight className="text-sky-600 " />
            </Link>
            <Link to="/about" onClick={() => setMenuVisible(false)} className="flex items-center justify-between">
              <li className="text-xl text-sky-600 font-semibold">About us</li>
              <ChevronRight className="text-sky-600 " />
            </Link>
          </ul>
        </div>
        {/* Nav menu */}
        <NavbarContext.Provider value={{ setMenuVisible }}>
          <Outlet />
        </NavbarContext.Provider>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="bg-gray-100 w-fit p-2 mb-2">
                <img src={shankhLogo} width={"100"} alt="shankh logo" />
              </div>
              <p className="text-blue-200">Your trusted travel partner since 2024</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-orange-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-orange-300">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Baggage Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Travel Insurance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="">
                  <Facebook />
                </a>
                <a href="#" className="">
                  <Instagram />
                </a>
                <a href="#" className="">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Root;
