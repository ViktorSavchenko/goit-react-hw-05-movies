import './Actors.css'

const Actors = ({ dataActors }) => {
  
  return (
    <ul className='Actors-list'>
      {dataActors.map(actor => (
        <li
          key={actor.id}
          className='Actors-list__item'
        >
          <img
            src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
            alt={actor.original_name}
            width='40'
            heigth='55'
            className='Actors-list__item-image'
          />
            
          <div className='Description-wrapper'>
            <p className='Actors-list__item-name'>
              Name:&nbsp;
              <span className='Actors-list__item-span'>{actor.original_name}</span>
            </p>
              
            <p className='Actors-list__item-character'>
              Character:&nbsp;
              <span className='Actors-list__item-span'>{actor.character}
              </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Actors;