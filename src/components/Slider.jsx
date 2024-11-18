import React, { useEffect, useState } from "react";
import { getNowMovie } from "../api";

const Slider = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getNowMovie().then((result) => {
      setNowPlaying(result);
    });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % nowPlaying.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + nowPlaying.length) % nowPlaying.length
    );
  };

  const currentMovie = nowPlaying[currentIndex];
  return (
    <div className="relative  bg-black">
      <button
        className="absolute z-10 lg:left-20 bottom-0 lg:bottom-10 left-4 transform -translate-y-1/2 text-black px-4 py-2 rounded-full shadow-lg transition font-bold bg-white"
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className="absolute z-10 lg:right-20 bottom-0 lg:bottom-10 right-4 transform -translate-y-1/2 text-black px-4 py-2 rounded-full shadow-lg transition font-bold bg-white"
        onClick={handleNext}
      >
        Next
      </button>
      {currentMovie && (
        <div className="relative ">
          <div className="absolute text-white lg:p-10 w-1/2 lg:w-1/4 left-4 lg:left-10 z-10 top-2 lg:top-12">
            <h1 className="text-4xl md:text-6xl font-bold lg:mb-2 ">
              Now Playing
            </h1>
            <h2 className="text-2xl lg:text-7xl font-extrabold mb-2">
              {currentMovie?.original_title}
            </h2>
            <p className="md:block text-xs md:text-base">
              {currentMovie?.overview}
            </p>
          </div>
          <img
            className=" py-0 w-full h-96 lg:h-[calc(100vh-250px)] object-cover"
            src={`${import.meta.env.VITE_BASEIMGURL}${
              currentMovie.backdrop_path
            }`}
            alt={currentMovie.original_title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default Slider;
