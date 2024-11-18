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
  }, []); 

  return (
    <div className="bg-slate-900 w-1/4 rounded-xl p-2 text-center lg:p-6 shadow-lg">
      <h2 className=" lg:text-2xl font-bold text-white mb-4">
        Select Genre
      </h2>
      <div className="relative">
        <select
          name="genre"
          id="genre-select"
          className="w-full bg-slate-700 text-white text-sm rounded-xl lg:p-3 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="" disabled selected>
            Choose a Genre
          </option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pergenre;
