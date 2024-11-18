import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { getDetail, getMovieSimiliar, getVideo } from "../api";
import Navbar from "../components/Navbar";
import PopularMovieList from "../components/MovieList";

const PerMovie = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [videos, setVideos] = useState([]); // Menggunakan array untuk menyimpan beberapa video
  const [movie, setMovie] = useState([]); // Menggunakan array untuk menyimpan beberapa video
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getDetail(id).then((result) => {
      setDetail(result);
    });
    getMovieSimiliar(id).then((result) => {
      setMovie(result);
    })
    getVideo(id).then((result) => {
      // Pastikan data API adalah array
      if (result?.length > 0) {
        setVideos(result);
      }
    });
  }, [id]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };
  console.log(detail);
  return (
    <>
      <Navbar />
      <div className="relative ">
        <div className="absolute text-white p-4 lg:w-1/4 lg:left-10 z-10 bottom-10 lg:top-36">
          <h2 className="text-2xl md:text-6xl font-extrabold mb-2">
            {detail?.original_title}
          </h2>
          <p className="text-red-500 md:block text-sm md:text-xl">
            {detail?.tagline}
          </p>
          <p className="md:block text-sm md:text-base">
            {detail?.overview}
          </p>
          <p className="text-yellow-300 md:block text-sm md:text-base">
            {detail?.release_date}
          </p>
        <p className="text-white md:block text-sm md:text-base">
          {(detail?.genres || []).map((genre) => genre.name).join(", ")}
        </p>
        </div>
        <img
          className=" py-0 w-full h-[calc(100vh-100px)] object-cover"
          src={`${import.meta.env.VITE_BASEIMGURL}${detail.backdrop_path}`}
          alt={detail.original_title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div className="hidden rounded-2xl absolute top-[300px] lg:top-24 right-16 lg:bg-white lg:w-[500px]  lg:block">
          <h1 className="text-center text-3xl uppercase hidden lg:block">Related Video</h1>
          <div className="relative p-1">
            {videos.length > 0 && (
              <>
                <button
                  className="absolute z-10 lg:left-20 bottom-16 left-4 opacity-60 transform -translate-y-1/2 text-black px-4 py-2 rounded-full shadow-lg transition font-bold bg-slate-100"
                  onClick={handlePrev}
                >
                  Previous
                </button>
                <div className="lg:flex z-30 ">
                  {videos[currentIndex]?.site === "YouTube" && (
                    <iframe
                    className="lg:w-full h-[200px] lg:h-[500px]"
                      src={`https://www.youtube.com/embed/${videos[currentIndex]?.key}`}
                      title={videos[currentIndex]?.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <button
                  className="absolute z-10 lg:right-20 bottom-16 right-4 opacity-60 transform -translate-y-1/2 text-black px-4 py-2 rounded-full shadow-lg transition font-bold bg-slate-100"
                  onClick={handleNext}
                >
                  Next
                </button>
              </>
            )}
            {videos.length === 0 && (
              <p className="text-center text-lg font-semibold">
                No videos available.
              </p>
            )}
          </div>
        </div>
      </div>
      <div></div>
      <PopularMovieList movie={movie} list="Similar Movie" />
    </>
  );
};

export default PerMovie;
