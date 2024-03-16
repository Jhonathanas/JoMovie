import { getMovieList, searchMovie } from './api'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [popularMovies , setPopularMovies] = useState([])
  
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })  
  }, [])

  const search = async (q) => {
    if(q.length > 4){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
      console.log({ query : query })  
      }
    }

  console.log(popularMovies)
  const PopularMovieList = () => {
    return popularMovies.map((movie , i) => {
      return (
        <div className='MovieWrapper' key={i}>
          <div className='titleMovie'>{movie.original_title}</div>
          <img className='imageMovie' 
          src={`${import.meta.env.VITE_BASEIMGURL}/${movie.poster_path}`}/>
          <div className='tglMovie'>{movie.release_date}</div>            
          <div className='rateMovie'>{movie.vote_average}</div>
        </div>
      )
    })
  }
  return (
    <div className='App'>
      <div className='navbar'>
        <a href="#home">Home</a>
      </div>
      <div className='header' >
        <h1>JonaFilm</h1>
        <h5>Temukan Beragam Detail Film Terkini dan Terlengkap! Nikmati Akses Yand Diambil dari Database TDM! Jelajahi Informasi Film yang Mengagumkan Sekarang!"</h5>
        <input style={{ marginBottom:'20px' }}
        placeholder='Judul Film yang ingin dicari ...'
        className='searchContainer'
        onChange={({ target }) => search(target.value)}/>
      </div>
      <div className='MovieContainer'>
        <PopularMovieList/>
      </div>
      <div className='footer'>
        <p>Copyright : by Jonathanas</p>
      </div>
    </div>
  )
}

export default App
