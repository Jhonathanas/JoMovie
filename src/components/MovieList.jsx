import React from "react";
import Movie from "./Movie";

const MovieList = ({ movie, list }) => {
  return (
    <div className="container mx-auto pl-5 pr-5 pt-5 uppercase rounded-2xl">
      <h1 className="font-bold mb-5 text-5xl text-white">{list}</h1>
      <ul className="flex lg:gap-6 overflow-x-auto no-scrollbar pb-4">
        {movie.map((movie, index) => (
          <li>
            <Movie i={index} m={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
