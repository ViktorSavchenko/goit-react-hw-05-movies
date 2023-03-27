import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "components/SearchForm/SearchForm";
import SearchList from "components/SearchList/Searchlist";


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
  
  console.log(setSearchParams);
  
  useEffect(() => {
    setStatus(STATUS.LOADING);
    fetch(`
https://api.themoviedb.org/3/search/movie?api_key=17cad80f9662381de06e4551c499d7de&language=en-US&query=${seacrhMovie}&page=1&include_adult=false`)
      .then(r => r.json())
      .then(movies => {
        setMovies(movies);
        setStatus(STATUS.RESOLVED);
      })
  }, [seacrhMovie]);
  
  if (status === STATUS.LOADING) { 
    return (
      <>
        <SearchForm />
        <div>LOADING...</div>
      </>
    );
  };
  
  
  if (status === STATUS.RESOLVED && movies.results.length > 0) { 
    return (
      <>
        <SearchForm />
        <SearchList serchData={ movies} />
      </>
    );
  };
  
   if (status === STATUS.RESOLVED && movies.results.length === 0) { 
    return (
      <>
        <SearchForm />
        <div>Тут ничего нет</div>
      </>
    );
  };
};

export default Movies;