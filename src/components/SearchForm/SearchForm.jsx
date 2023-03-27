import { useState } from "react";

const SearchForm = ({ onClick }) => {
  const [value, setValue] = useState('');
  
  const onInputChange = e => {
    setValue(e.target.value);
  };
  
  const onSearchSubmit = e => {
    e.preventDefault();
    
    const searchValue = e.target.elements.search.value.trim()
    const searchParams = searchValue !== '' ? searchValue : [];
    
    onClick(searchParams);
    
    setValue('');
  };
  
  return (
    <form onSubmit={onSearchSubmit}>
      <label>
        <input
          type="text"
          value={value}
          name="search"
          onChange={onInputChange}/>
      </label>
      
      <button type="submit" >Search</button>
    </form>
  );
};

export default SearchForm;