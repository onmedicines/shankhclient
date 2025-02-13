import { useState } from "react";
import { Link, Outlet } from "react-router";
import shankhLogo from "/shankhair-transparent.png";
import { Menu, User, X, ChevronRight } from "lucide-react";
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
        <Link to={"/"}>
          <img src={shankhLogo} width={"100"} alt="shankh logo" />
        </Link>
        <ul className="flex space-x-12 hidden md:flex">
          <Link to="/" className="flex items-center justify-between">
            <li className="text-md text-sky-800 font-bold">Home</li>
          </Link>
          <Link to="/about" className="flex items-center justify-between">
            <li className="text-md text-sky-800 font-bold">About us</li>
          </Link>
          <Link to="/" className="flex items-center justify-between">
            <li className="text-md text-sky-800 font-bold">Search Flights</li>
          </Link>
          <Link to={"/login"}>
            <User />
          </Link>
        </ul>
      </nav>
      <main className={`relative min-w-screen flex-grow`}>
        {/* Nav menu */}
        <div className={`md:hidden z-100 absolute top-0 left-0 w-full h-screen overflow-y-scroll bg-slate-100 transition-transform duration-300 flex flex-col justify-between p-4 ${isMenuVisible ? "transform translate-x-0" : "transform -translate-x-full"}`}>
          <ul className="flex flex-col gap-6 list-disk py-8 px-4">
            <Link to="/" onClick={() => setMenuVisible(false)} className="flex items-center justify-between">
              <li className="text-xl text-sky-800 font-bold">Home</li>
              <ChevronRight className="text-sky-800 " />
            </Link>
            <Link to="/login" onClick={() => setMenuVisible(false)} className="flex items-center justify-between">
              <li className="text-xl text-sky-800 font-bold">Login</li>
              <ChevronRight className="text-sky-800 " />
            </Link>
            <Link to="/register" onClick={() => setMenuVisible(false)} className="flex items-center justify-between">
              <li className="text-xl text-sky-800 font-bold">Register</li>
              <ChevronRight className="text-sky-800 " />
            </Link>
            <Link to="/about" onClick={() => setMenuVisible(false)} className="flex items-center justify-between">
              <li className="text-xl text-sky-800 font-bold">About us</li>
              <ChevronRight className="text-sky-800 " />
            </Link>
          </ul>
        </div>
        {/* Nav menu */}
        <NavbarContext.Provider value={{ setMenuVisible }}>
          <Outlet />
        </NavbarContext.Provider>
      </main>
    </div>
  );
}

export default Root;
