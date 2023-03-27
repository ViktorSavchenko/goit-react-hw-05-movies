const Actors = ({ dataActors }) => {
  
  return (
    <ul>
      {dataActors.map(actor => (
        <li key={actor.id}>
          <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={actor.original_name} width={50} height={75}/>
          <p>Name: {actor.original_name}</p>
          <p>Character: {actor.character}</p>
        </li>
      )) }
    </ul>
  );
};

export default Actors;