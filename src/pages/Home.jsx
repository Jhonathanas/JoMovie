import {
  getPopularMovies,
  searchMovie,
  getUpcoming,
  getToprated,
} from "../api";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Pergenre from "../components/Pergenre";
import { getMovieListByGenre } from "../api";
import Navbar from "../components/Navbar";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [toprated, setToprated] = useState([]);
  const [genre, setGenre] = useState([]);
  const [namegenre, setNamegenre] = useState([]);

  useEffect(() => {
    getPopularMovies().then((result) => {
      setPopularMovies(result);
    });

    getUpcoming().then((result) => {
      setUpcoming(result);
    });
    getToprated().then((result) => {
      setToprated(result);
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
    setGenre(moviesByGenre);
  };

  return (
    <div>
      <Navbar search={search} />
      <Slider />
      <div className="flex container mx-auto items-center justify-center py-4">
        <Pergenre handleSelect={handleGenreSelect} />
        <Header />
      </div>
      {genre.length > 0 && <MovieList movie={genre} list="genre" />}
      <MovieList movie={popularMovies} list="popular" />
      <MovieList movie={toprated} list="top-rated" />
      <MovieList movie={upcoming} list="upcoming" />
    </div>
  );
};

export default Home;
