import { Link } from "react-router-dom";

const MoviesList = ({ dataMovies }) => {  
  return (
    <ul>{
      dataMovies.map(({ id, title }) => (
        <Link key={id} to={`movies/${id}`}>{title}
      </Link>))
    }</ul>
  );
};

export default MoviesList;