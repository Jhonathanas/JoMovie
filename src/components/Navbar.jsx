import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-black shadow-lg flex items-center justify-between px-6 sm:px-12 lg:px-20 py-4 text-white text-2xl">
      <Link to={'/'} className="uppercase font-bold text-3xl tracking-widest">
        Jomovie
      </Link>
      <ul className="hidden sm:flex space-x-8 ml-4">
        <li>
          <Link to={"/"} className="hover:text-gray-300 transition duration-300 ease-in-out">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/series"} className="hover:text-gray-300 transition duration-300 ease-in-out">
            Series
          </Link>
        </li>
        <li>
          <Link to={"/actor"} className="hover:text-gray-300 transition duration-300 ease-in-out">
            Actor
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
