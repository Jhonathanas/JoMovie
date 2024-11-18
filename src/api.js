import axios from 'axios'

const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;

// movie
export const getPopularMovies = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}   
export const getNowMovie = async () => {
    const movie = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`)
    return movie.data.results
}   
export const getUpcoming = async () => {
    const movie = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
    return movie.data.results
}   
export const getToprated = async () => {
    const movie = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
    return movie.data.results
}   
export const getVideo = async (q) => {
    const movie = await axios.get(`${baseUrl}/movie/${q}/videos?api_key=${apiKey}`)
    return movie.data.results;
}   
export const getDetail = async (q) => {
    const movie = await axios.get(`${baseUrl}/movie/${q}?api_key=${apiKey}`); // Correct the URL path
    return movie.data; // Return the movie data
  }; 
export const getGenre = async () => {
    const movie = await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);
    return movie.data; // Return the movie data
  }; 
export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}
export const getMovieListByGenre = async (genreId) => {
    const response = await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);
    return response.data.results;
};

//PERMOVIE
export const getMovieSimiliar = async (q) => {
    const response = await axios.get(`${baseUrl}/movie/${q}/similar?api_key=${apiKey}`);
    return response.data.results;
};
//people

export const getPeople = async () => {
    const movie = await axios.get(`${baseUrl}/person/popular?api_key=${apiKey}`)
    return movie.data.results
}   
export const searchPeople = async (q) => {
    const search = await axios.get(`${baseUrl}/search/person?query=${q}&api_key=${apiKey}`)
    return search.data
}

