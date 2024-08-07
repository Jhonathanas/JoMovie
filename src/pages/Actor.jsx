import React, { useEffect, useState } from "react";
import { getPeople, searchPeople } from "../api";
import Header from "../components/Header";

const Actor = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getPeople().then((result) => {
      setActors(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchPeople(q);
      setActors(query.results);
    }
  };

  const handleActorClick = (actor) => {
    setSelectedActor(actor);
  };

  const handleMouseEnter = (actor) => {
    setSelectedActor(actor);
  };

  const handleMouseLeave = () => {
    setSelectedActor(null);
  };

  if (actors.length === 0) {
    return <div className="text-center text-2xl mt-10">Loading...</div>;
  }

  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Actor Directory</h1>
          <p className="text-lg text-center mt-2">
            Discover and explore famous actors and their popular movies
          </p>
        </div>
      </header>
      <div className="flex flex-wrap justify-center w-full max-w-6xl mx-auto mt-10">
        {actors.map((actor) => (
          <div
            key={actor.id}
            className="border border-gray-200 p-4 rounded-lg shadow-lg m-4 w-80 hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleActorClick(actor)}
            onMouseEnter={() => handleMouseEnter(actor)}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-xl font-bold mb-4 text-center text-white">
              {actor.name}
            </h1>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-slate-200 mb-4 text-center">
              Popularity: {actor.popularity}
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2 text-center">
                Known For
              </h2>
              <ul className="space-y-4">
                {actor.known_for?.map((movie) => (
                  <li key={movie.id} className="flex flex-col items-center">
                    <h3 className="text-md font-semibold mb-2 text-center">
                      {movie.title}
                    </h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt={movie.title}
                      className="w-full h-40 object-cover rounded-md mb-2"
                    />
                    <p className="text-gray-600 text-sm">{movie.overview}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Actor;
