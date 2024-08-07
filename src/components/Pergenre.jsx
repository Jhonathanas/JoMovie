import React, { useEffect, useState } from "react";
import { getGenre } from "../api";

const Pergenre = ({ handleSelect }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenre()
      .then((result) => {
        setGenres(result.genres || []); // Ensure result is an array
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
        setGenres([]); // Handle errors gracefully
      });
  }, []); // Empty dependency array to run once

  console.log(genres);

  return (
    <div className="container mx-auto py-5 px-10 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">Select Genre</h2>
      <ul className="flex gap-5 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {genres.map((g) => (
          <li key={g.id}>
            <button
              className="px-4 py-2 bg-gradient-to-tr from-sky-100 via-sky-200 to-sky-300 text-black hover:scale-110 hover:bg-sky-900 hover:text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-150"
              onClick={() => handleSelect(g.id)}
            >
              {g.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pergenre;
