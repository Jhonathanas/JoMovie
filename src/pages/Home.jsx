import { getMovieList, searchMovie, getNowMovie } from "../api";
import { useEffect, useState } from "react";
import PopularMovieList from "../components/PopularMovieList";
import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Pergenre from "../components/Pergenre";
import { getMovieListByGenre } from "../api";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 4) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };
  const handleGenreSelect = async (genreId) => {
    const moviesByGenre = await getMovieListByGenre(genreId);
    setPopularMovies(moviesByGenre);
  };
   return (
    <div>
      <Slider />
      <Header search={search} />
      <Pergenre handleSelect={handleGenreSelect} />
      <div className="MovieContainer container mx-auto">
        <PopularMovieList movie={popularMovies} />
      </div>
    </div>
  );
};

export default Home;
