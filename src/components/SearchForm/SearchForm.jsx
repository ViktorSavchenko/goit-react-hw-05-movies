import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const onSearchSubmit = e => {
    e.preventDefault();
    setSearchParams({ quary: e.target.elements.moviename.value });
    
    e.target.reset();
  };
  
  return (
    <form onSubmit={onSearchSubmit}>
      <label>
        <input type="text" name="moviename"/>
      </label>
      
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;