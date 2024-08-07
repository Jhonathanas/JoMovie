import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { getDetail } from "../api";

const PerMovie = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getDetail(id).then((result) => {
      setDetail(result);
    });
  }, [id]);

  console.log(detail);

  return (
    <div className="relative container mx-auto p-4 h-screen">
      <div>
        {detail.backdrop_path && (
          <img
            className="inset-0 w-1/2 object-cover opacity-60 "
            src={`${import.meta.env.VITE_BASEIMGURL}${detail.backdrop_path}`}
            alt={`${detail.title} Background`}
          />
        )}
        <div className="absolute top-80 left-10 text-center z-10">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            {detail.title}
          </h1>
          <p className="text-xl text-gray-400 italic mb-6">{detail.tagline}</p>
          <p className="text-lg text-white mb-6">
            <strong>{detail.overview}</strong> 
          </p>
        </div>
      </div>
      <div className="bg-gray-900 p-8 rounded-lg shadow-2xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-md text-gray-400">
            <strong>Release Date:</strong> {detail.release_date}
          </p>
          <p className="text-md text-gray-400">
            <strong>Runtime:</strong> {detail.runtime} minutes
          </p>
          <p className="text-md text-gray-400">
            <strong>Budget:</strong> ${detail.budget?.toLocaleString()}
          </p>
          <p className="text-md text-gray-400">
            <strong>Revenue:</strong> ${detail.revenue?.toLocaleString()}
          </p>
          <p className="text-md text-gray-400 md:col-span-2">
            <strong>Genres:</strong>{" "}
            {detail.genres?.map((genre) => genre.name).join(", ")}
          </p>
          <p className="text-md text-gray-400">
            <strong>Vote Average:</strong> {detail.vote_average}
          </p>
          <p className="text-md text-gray-400">
            <strong>Vote Count:</strong> {detail.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerMovie;
