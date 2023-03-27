import Comments from 'components/Comments/Comments';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    setStatus(STATUS.LOADING);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=17cad80f9662381de06e4551c499d7de&language=en-US&page=1`).then(r => r.json())
      .then(review => {
        setReviews(review.results);
        setStatus(STATUS.RESOLVED);
      })
  }, [movieId]);
  
  console.log(reviews);
  
  if (status === STATUS.LOADING) { 
    return (
      <div>LOADING...</div>
    );
  };
  
  if (status === STATUS.RESOLVED && reviews.length !==0) { 
    return (
      <Comments dataReviews={reviews } />
    );
  };
};

export default Reviews;

