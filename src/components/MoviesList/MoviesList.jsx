import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ dataMovies }) => { 
  const location = useLocation();
  
  return (
    <ul>{
      dataMovies.map(({ id, title }) => (
        <li key={id} >
          <Link key={id} to={`movies/${id}`} state={ {from: location}}>{title}</Link>
        </li>
      ))
    }</ul>
  );
};

export default MoviesList;