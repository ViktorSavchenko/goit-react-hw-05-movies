import { useEffect, useState } from "react";
import MoviesList from '../components/MoviesList/MoviesList'

const Movies = () => {
  const [movies, setMovise] = useState([]);
  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=17cad80f9662381de06e4551c499d7de').then(r => r.json()).then(movies => setMovise(movies.results));
  }, [])
  
  return (
    <MoviesList dataMovies={movies }/>
  );
};

export default Movies;