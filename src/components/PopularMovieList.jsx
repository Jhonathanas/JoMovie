import React from "react";
import { Link } from "react-router-dom";

const PopularMovieList = ({ movie }) => {
  console.log(movie);
  return movie.map((m, i) => {
    return (
      <div
        className="border-yellow-50 border lg:p-4 p-1 rounded-lg shadow-lg lg:w-80 w-32 text-center"
        key={i}
      >
        <Link to={`/movie/${m.id}`}>
          <div className="lg:text-2xlfont-bold text-white mb-2">
            {m.original_title}
          </div>
          <img
            className="w-full object-cover rounded-lg mb-2"
            src={`${import.meta.env.VITE_BASEIMGURL}${m.poster_path}`}
            alt={`${m.original_title} Poster`}
          />
          <div className="text-white mb-1">{m.release_date}</div>
          <div className="text-yellow-400 font-semibold">{m.vote_average}</div>
        </Link>
      </div>
    );
  });
};

export default PopularMovieList;
