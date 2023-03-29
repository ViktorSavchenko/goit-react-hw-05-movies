import { Link, useLocation } from "react-router-dom";
import './MoviesList.css'

const MoviesList = ({ dataMovies }) => {
  const location = useLocation();
  
  return (
    <section>
      <div className="Container">
        <ul className="Movies-list">
          {dataMovies.map(({ id, title, poster_path, vote_average
            , release_date }) => (
            <li className="Movies-list__item" key={id}>
              <Link
                key={id}
                to={`movies/${id}`}
                state={{ from: location }}
              >
                <div className="Banner-wrapper">
                  <img
                    className="Movies-list__img"
                    src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                    alt={title} />
                  
                  <p className="Movies-list__rating">{(vote_average).toFixed(1)
                  }</p>
                </div>
                <div className="Descriprion-wrapper">
                  <p className="Descriprion-title">{title}</p>
                  
                  <p className="Descriprion-date">({Number.parseInt(release_date)})</p>
                </div>
              </Link>
            </li>
          ))
          }
        </ul>
      </div>
    </section>
  );
};

export default MoviesList;

// https://image.tmdb.org/t/p/w300//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg