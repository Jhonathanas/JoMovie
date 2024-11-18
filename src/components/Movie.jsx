import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ m, i }) => {
  return (
    <div
      className=" relative lg:p-4 p-1 rounded-lg shadow-lg text-center w-32 lg:w-52"
      key={i}
    >
      <Link to={`/movie/${m.id}`}>
        <div className="absolute top-2 z-10 lg:text-2xl font-bold text-white mb-2 ">
          {m.original_title}
        </div>
        <div className="absolute top-2 inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        <img
          className="mt-10 w-100% object-contain rounded-lg "
          src={`${import.meta.env.VITE_BASEIMGURL_BANNER}${m.poster_path}`}
          alt={`${m.original_title} Poster`}
        />
        <div className="text-white mb-1">{m.release_date}</div>
        <div className="text-yellow-400 font-semibold">{m.vote_average}</div>
      </Link>
    </div>
  );
};

export default Movie;
