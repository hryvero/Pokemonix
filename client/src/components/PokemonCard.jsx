import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PokemonCard({name, url}) {

  const [pokemon, setPokemon] = useState(null);

  const toFirstCharUppercase = name =>
  name.charAt(0).toUpperCase() + name.slice(1)

  useEffect(() => {
    console.log('TEST')
    axios.get(url).then(({ data }) => {
      setPokemon(data)
    })
  }, [])

  return (
    <div>
     <img src="" alt="" srcset="" />
     <h2>{name}</h2>
    

     <div className="container">
      <ul>Type: {pokemon.types.map(({ type: { name } }) => <li>{name}</li>)}</ul>
     </div>
     

    </div>
  );
}

export default PokemonCard;