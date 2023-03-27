import Actors from 'components/Actors/Actors';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movieActors, setMovieActors] = useState([]);
  
  useEffect(() => {
    setStatus(STATUS.LOADING);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=17cad80f9662381de06e4551c499d7de&language=en-US`).then(r => r.json())
      .then(actors => {
        setMovieActors(actors.cast);
        setStatus(STATUS.RESOLVED);
      })
  }, [movieId]);
  
  if (status === STATUS.LOADING) { 
    return (
      <div>LOADING...</div>
    );
  };
  
  if (status === STATUS.RESOLVED && movieActors.length !==0) { 
    return (
      <Actors dataActors={movieActors } />
    );
  };
};

export default Cast;

