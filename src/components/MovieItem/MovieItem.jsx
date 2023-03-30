import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import './MovieItem.css'

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieItem = ({ movieId }) => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movie, setMovie] = useState({});
  const { original_title, poster_path, vote_average, vote_count, release_date, production_countries, genres, runtime, overview } = movie;
  const location = useLocation(); 
  const linkBackPage = useRef(location.state?.from ?? '/')
  
  useEffect(() => {
    setStatus(STATUS.LOADING);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=17cad80f9662381de06e4551c499d7de&language=en-US`).then(r => r.json())
      .then(movie => {
        setMovie(movie);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setStatus('reject');
      });
  }, [movieId]);
  
  if (status === STATUS.LOADING) { 
    return (
      <div>LOADING...</div>
    );
  };
  
  if (status === STATUS.RESOLVED) {
    return (
      <div className="Container Movie-container">
        <div className="Movie-wrapper">
          <Link to={linkBackPage.current} className='Back-btn'>
            <span className="Btn-span">go back</span>
          </Link>
                
          <h2 className="Movie-title">{original_title.toUpperCase()}</h2>
        
          <div className="Card-wrapper">
            <div className="Poster-wrapper">
              <img
                className="Movie-poster"
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={original_title}
              />
           
              <p className="Movie-rating">Rating: {vote_average} (<span>{vote_count} vote</span>)</p>
            </div>
      
            <div className="Movie-descr-list">
              <p className="Movie-date">Date of release: <span className="Movie-span">{Number.parseInt(release_date)}</span></p>
            
              <div className="Movie-countries-wrapper">
                <p className="Movie-countries">Countries:&nbsp;</p>
                <ul>
                  {production_countries.map(({ iso_3166_1, name }) => (
                    <li key={iso_3166_1}>
                      <span className="Movie-span">{name}</span>
                    </li>))}
                </ul>
              </div>
             
              <div className="Movie-genres-wrapper">
                <p className="Movie-genres">Genres:&nbsp;</p>
                <ul>
                  {genres.map(({ id, name }) => (
                    <li key={id}>
                      <span className="Movie-span">{name.toLowerCase()}</span>
                    </li>))}
                </ul>
              </div>
            
              <p className="Movie-runtime">Runtime: <span className="Movie-span">{runtime} min</span></p>
        
              <p className="Movie-overview">Overview:</p>
              <p className="Movie-span">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };  
};

export default MovieItem;

MovieItem.propTypes = {
    movieId: PropTypes.string.isRequired,
};
