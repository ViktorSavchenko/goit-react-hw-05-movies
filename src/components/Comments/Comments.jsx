import './Comments.css'

const Comments = ({ dataReviews }) => {  
  if (dataReviews.length !== 0) { 
    return (
      <ul className='Comment-list'>
        {dataReviews.map(review => (
          <li
            key={review.id}
            className='Comment-list__item'
          >
            <p className='Comment-list__item-create'>
              Created at:&nbsp;
              <span className='Comment-span'>{review.created_at}</span>
            </p>
            
            <p className='Comment-list__item-author'>
              Author:&nbsp;
              <span className='Comment-span'>{review.author}</span>
            </p>
            
            <p className='Comment-list__item-review'>
              Review:&nbsp;
              <span className='Comment-span'>{review.content}</span>
            </p>
          </li>
        ))}
      </ul>
    );
  };    
};

export default Comments;