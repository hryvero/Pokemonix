import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style.scss"
import CardDetails from './CardDetails';

function PokemonCard({ name, url }) {

  const [pokemon, setPokemon] = useState(null);
  const [info, setInfo] = useState(null);

 






  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPokemon({
        id: data.id,
        name: data.name.charAt(0).toUpperCase() + name.slice(1),
        type: data.types[0].type.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        weight: data.weight,
        stats: data.stats,
        moves: data.moves,
        speed: data.stats[3].base_stat
      })
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
      setInfo(imageUrl)
    })
  }, [])

 const [open, setOpen] = useState(false)


  return (
    <div className='card' >
      <img className='card__img' src={info} />
      <h2 className='card__name'>{pokemon?.name}</h2>
      <div className="container">
        <button className={pokemon?.type}>{pokemon?.type.charAt(0).toUpperCase() + pokemon?.type.slice(1)}</button>
        {open ? <CardDetails
          pokemon={pokemon}
        /> : Error}


      </div>

    </div>
  );
}

export default PokemonCard;