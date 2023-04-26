import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PokemonCard({ name, url }) {

  const [pokemon, setPokemon] = useState(null);
  const [info, setInfo] = useState(null);

  const toFirstCharUppercase = name =>
    name.charAt(0).toUpperCase() + name.slice(1)



  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPokemon(data)
    })
loadimg()
  }, [url])

  const loadimg=async()=>{
    await axios.get(url).then(({ data }) => {
         
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
          setInfo(imageUrl)
    })
  }


  console.log("pokemon", pokemon);
  console.log("info", info);



  const updatedName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <div>
  
      <img src={info} />
      <h2>{updatedName}</h2>
      <div className="container">
        {pokemon?.types.map(({ type: { name } }) => <button>{name}</button>)}
      </div>


    </div>
  );
}

export default PokemonCard;