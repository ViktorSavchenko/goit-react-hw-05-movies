import { useEffect, useState } from "react";

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieItem = ({ movieId }) => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movie, setMovie] = useState({});
  const { original_title, backdrop_path, vote_average, release_date, genres, overview} = movie;
  
  
  useEffect(() => {
    setStatus(STATUS.LOADING);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=17cad80f9662381de06e4551c499d7de&language=en-US`).then(r => r.json())
      .then(movie => {
        setMovie(movie);
        setStatus(STATUS.RESOLVED);
      })
  }, [movieId]);
  
  if (status === STATUS.LOADING) { 
    return (
      <div>LOADING...</div>
    );
  };
  
  if (status === STATUS.RESOLVED) {
    return (
    <div>
      <h2>{original_title}</h2>
      
      <div>
        <img src={`https://image.tmdb.org/t/p/w300${backdrop_path}`} alt={original_title} />
        <p>Rating: {vote_average }</p>
      </div>
      
      <ul>        
        <li>{release_date}</li>
        
        <li>
          <ul>
              {genres.map(({ id, name }) => (<li key={id}>{ name}</li>))}
          </ul>
        </li>       
        
        <li>{overview }</li>
      </ul>
    </div>
    );
  };  
};

export default MovieItem;