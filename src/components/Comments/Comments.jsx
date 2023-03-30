import PropTypes from 'prop-types';
import './Comments.css'

const Comments = ({ dataReviews }) => {  
  if (dataReviews.length !== 0) { 
    return (
      <ul className='Comment-list'>
        {dataReviews.map(({id, created_at, author, content}) => (
          <li
            key={id}
            className='Comment-list__item'
          >
            <p className='Comment-list__item-create'>
              Created at:&nbsp;
              <span className='Comment-span'>{created_at}</span>
            </p>
            
            <p className='Comment-list__item-author'>
              Author:&nbsp;
              <span className='Comment-span'>{author}</span>
            </p>
            
            <p className='Comment-list__item-review'>
              Review:&nbsp;
              <span className='Comment-span'>{content}</span>
            </p>
          </li>
        ))}
      </ul>
    );
  };    
};

export default Comments;

Comments.propTypes = {
  dataReviews: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }))
};