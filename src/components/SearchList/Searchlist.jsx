import { Link, useLocation } from "react-router-dom";

const SearchList = ({ serchData }) => {
  const { results } = serchData;
  const location = useLocation();
  
  return (
    <ul>
      {results.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`${id}`} state={{from:location}}>{original_title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchList;