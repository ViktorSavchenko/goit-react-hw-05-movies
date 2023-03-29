import { Link, useLocation } from "react-router-dom";
import './SearchList.css'

const SearchList = ({ serchData }) => {
  const { results } = serchData;
  const location = useLocation();
  
  return (
    <div className="Container">
      <ul className="Search-movies-list">
        {results.map(({ id, original_title, poster_path, vote_average, release_date }) => (
          <li key={id} className="Search-movies-list__item">
            <Link to={`${id}`} state={{ from: location }}><div className="Banner-wrapper">
              <img
                className="Movies-list__img Search-movies-list__img"
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={original_title}
                width={223}
                height={335}
              />
                  
              <p className="Movies-list__rating">{(vote_average).toFixed(1)
              }</p>
            </div>
              <div className="Descriprion-wrapper">
                <p className="Descriprion-title">{original_title}</p>
                  
                <p className="Descriprion-date">({Number.parseInt(release_date)})</p></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;