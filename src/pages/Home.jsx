import { useEffect, useState } from "react";
import MoviesList from '../components/MoviesList/MoviesList'
import NotFound from "components/NotFound/NotFound";

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [movies, setMovise] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=17cad80f9662381de06e4551c499d7de')
      .then(r => r.json())
      .then(movies => {
        setMovise(movies.results);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setStatus('reject');
      });
  }, []);
  
  return (
    <>
      {status === STATUS.LOADING && <div>LOADING...</div>}    
      
      {status === STATUS.RESOLVED && movies.length > 0 && 
        <MoviesList dataMovies={movies} />}
      
      {status === STATUS.REJECTED && movies.length === 0 && <NotFound>We have some problems!</NotFound>}
    </>
  );
};

export default Movies;