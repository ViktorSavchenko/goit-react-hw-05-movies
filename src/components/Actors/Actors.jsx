import PropTypes from 'prop-types';
import './Actors.css'

const Actors = ({ dataActors }) => {
  
  return (
    <ul className='Actors-list'>
      {dataActors.map(({ id, profile_path, original_name, character }) => (
        <li
          key={id}
          className='Actors-list__item'
        >
          {profile_path ?
            (<img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt={original_name}
              width='40'
              heigth='55'
              className='Actors-list__item-image'
            />) :
            (<img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmaOOtC7388IqzDT53w6yk54PdRDs3o85gZJ8GH6zRipRYt4nDpfsIsJ2cPaZBiEPKhY&usqp=CAU"
              alt={original_name}
              width='40'
              heigth='55'
              className='Actors-list__item-image'
            />) 
          }
            
          <div className='Description-wrapper'>
            <p className='Actors-list__item-name'>
              Name:&nbsp;
              <span className='Actors-list__item-span'>{original_name}</span>
            </p>
              
            <p className='Actors-list__item-character'>
              Character:&nbsp;
              <span className='Actors-list__item-span'>{character}
              </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Actors;

Actors.propTypes = {
  dataActors: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    profile_path: PropTypes.string,
    original_name: PropTypes.string,
    character: PropTypes.string,
  }))
};