import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "components/SearchForm/SearchForm";
import SearchList from "components/SearchList/Searchlist";
import NotFound from "components/NotFound/NotFound";


const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const seacrhMovie = searchParams.get('quary') ?? "";
  
  const onChangeURLbyForm = data => {
    if (data === '') {
      return setSearchParams({});
    }
    setSearchParams({ quary: data });
    
  };
  
  useEffect(() => {
    setStatus(STATUS.LOADING);
    fetch(`
https://api.themoviedb.org/3/search/movie?api_key=17cad80f9662381de06e4551c499d7de&language=en-US&query=${seacrhMovie}&page=1&include_adult=false`)
      .then(r => r.json())
      .then(movies => {
        setMovies(movies);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setStatus('reject');
      });
  }, [seacrhMovie]);
  
  return (
    <>
      <SearchForm onClick={onChangeURLbyForm} />
      
      {status === STATUS.LOADING && <div>LOADING...</div>}
      
      {status === STATUS.RESOLVED && movies.results.length === 0 && <NotFound>There is nothing here or this material was not found, change your search parameters!</NotFound>}
      
      {status === STATUS.RESOLVED && movies.results.length > 0 && <SearchList serchData={movies} />}
    </>
  );
};

export default Movies;