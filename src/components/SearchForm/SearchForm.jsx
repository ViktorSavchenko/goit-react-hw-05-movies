import { useState } from "react";
import './SearchForm.css'

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
    <div className="Container">
      <form onSubmit={onSearchSubmit} className='Search-form'>
        <label>
          <input
            type="text"
            value={value}
            name="search"
            placeholder="Search..."
            onChange={onInputChange}
            className='Search-form__input' />
        </label>
      
        <button type="submit" className="Search-form__button">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;