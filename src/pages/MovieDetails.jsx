import AdditionalInformation from "components/AdditionalInformation/AdditionalInformation";
import { useParams } from "react-router-dom";
import MovieItem from '../components/MovieItem/MovieItem';

const MovieDetails = () => {
  const { movieId } = useParams();
  
  return (
    <>
      <MovieItem movieId={movieId} />
     
      <AdditionalInformation />
    </>
  );
};

export default MovieDetails;