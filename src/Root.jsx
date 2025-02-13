import { useState } from "react";
import { Link, Outlet } from "react-router";
import shankhLogo from "/shankhair-transparent.png";
import { Menu, User, X } from "lucide-react";
import { ChevronRight } from "lucide-react";

function Root() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <div className={`max-w-screen min-h-screen overflow-x-hidden bg-slate-100 flex flex-col ${isMenuVisible ? "max-h-screen overflow-y-hidden" : ""} }`}>
      <nav className="flex justify-between items-center py-4 px-4">
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
        <Link to={"/"}>
          <img src={shankhLogo} width={"100"} alt="shankh logo" />
        </Link>
        <Link to={"/login"}>
          <User />
        </Link>
      </nav>
      <main className={`relative min-w-screen flex-grow`}>
        {/* Nav menu */}
        <div className={`z-100 absolute top-0 left-0 w-full h-screen overflow-y-scroll bg-slate-100 transition-transform duration-300 flex flex-col justify-between p-4 ${isMenuVisible ? "transform translate-x-0" : "transform -translate-x-full"}`}>
          <ul className="flex flex-col gap-6 list-disk py-8 px-4">
            <Link to="/" className="flex items-center justify-between">
              <li className="text-2xl text-slate-700 font-bold">Home</li>
              <ChevronRight className="text-slate-700 " />
            </Link>
            <Link to="/" className="flex items-center justify-between">
              <li className="text-2xl text-slate-700 font-bold">Home</li>
              <ChevronRight className="text-slate-700 " />
            </Link>
            <Link to="/" className="flex items-center justify-between">
              <li className="text-2xl text-slate-700 font-bold">Home</li>
              <ChevronRight className="text-slate-700 " />
            </Link>
          </ul>
        </div>
        {/* Nav menu */}
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
