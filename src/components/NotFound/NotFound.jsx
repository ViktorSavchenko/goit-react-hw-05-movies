import PropTypes from 'prop-types';
import './NotFound.css'

const NotFound = ({ children }) => {
  return (
    <div className='Container'>
      <div className='Not-found-wrapper'>
        <h2 className='Not-found-wrapper__title'>{children}</h2>
      </div>
    </div>
  );
};

export default NotFound;

NotFound.propTypes = {
    children: PropTypes.string.isRequired,
};