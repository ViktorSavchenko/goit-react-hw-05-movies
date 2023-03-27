const Comments = ({ dataReviews }) => {  
  if (dataReviews.length !== 0) { 
    return (
      <ul>
        {dataReviews.map(review => (
          <li key={review.id}>
            <p>Created at: {review.created_at}</p>
            <p>Author: {review.author}</p>
            <p>Review: {review.content}</p>
          </li>
        ))}
      </ul>
    );
  };    
};

export default Comments;