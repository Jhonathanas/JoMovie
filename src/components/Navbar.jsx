import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({search}) => {
  return (
    <div className="sticky top-0 z-30 bg-black flex items-center justify-between text-white text-2xl py-3 px-2 lg:px-5">
      <Link to={"/"} className="uppercase font-bold text-3xl tracking-widest">
        Jomovie
      </Link>
      <ul className="flex text-sm text-center lg:text-lg sm:flex  gap-1 lg:gap-4">
        <li>
          <Link
            to={"/"}
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/series"}
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Series
          </Link>
        </li>
        <li>
          <Link
            to={"/actor"}
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Actor
          </Link>
        </li>
      </ul>
        <input
          placeholder="search"
          className="w-20 lg:w-60 text-base lg:text-lg rounded-2xl lg:block pl-2 lg:pb-1 "
          onChange={({ target }) => search(target.value)}
        />
    </div>
  );
};

export default Navbar;
