import React, { useEffect, useState } from "react";
import { getNowMovie, getVideo } from "../api";

const Slider = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getNowMovie().then((result) => {
      setNowPlaying(result);
    });
  }, []);

  useEffect(() => {
    if (nowPlaying.length > 0) {
      const currentMovie = nowPlaying[currentIndex];
      getVideo(currentMovie.id).then((result) => {
        const trailer = result.find((video) => video.type === "Trailer");
        setVideo(trailer);
      });
    }
  }, [currentIndex, nowPlaying]);

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
    <div className="relative lg:flex block gap-5 items-center justify-center w-full bg-black">
      <button
        className="absolute z-10 lg:left-20 lg:top-1/2 -bottom-10 left-4 opacity-60 transform -translate-y-1/2 text-white px-4 py-2 rounded-full shadow-lg transition font-bold"
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
        className="absolute z-10 lg:right-20 lg:top-1/2 -bottom-10 right-4 opacity-60 transform -translate-y-1/2 text-white px-4 py-2 rounded-full shadow-lg transition font-bold"
        onClick={handleNext}
      >
        Next
      </button>
      <div className="max-w-lg text-white p-4 bg-gradient-to-r from-black to-transparent rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold lg:mb-2 ">Now Playing</h1>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          {currentMovie?.original_title}
        </h2>
        <p className="hidden md:block text-lg md:text-xl font-medium">
          {currentMovie?.overview}
        </p>
      </div>
      {currentMovie && (
        <div className="">
          <img
            className="lg:py-5 py-0 w-full h-full object-cover "
            src={`${import.meta.env.VITE_BASEIMGURL}${
              currentMovie.backdrop_path
            }`}
            alt={currentMovie.original_title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default Slider;
