import { Link } from "react-router-dom";

const SearchList = ({ serchData }) => {
  const { results } = serchData;
  
  return (
    <ul>
      {results.map(({id, original_title}) => (
        <Link key={ id} to={`${id}`}>{original_title}</Link>
      ))}
    </ul>
  );
};

export default SearchList;