import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style.scss"

function PokemonCard({ name, url }) {

  const [pokemon, setPokemon] = useState(null);
  const [info, setInfo] = useState(null);
  const [open, setOpen]=useState(false)



  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setPokemon({
        type: data.types[0].type.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        weight: data.weight,
        stats: data.stats,
        moves: data.moves,
        speed: data.stats[3].base_stat
    })
    })
    loadimg()
  }, [])

  const loadimg = async () => {
    await axios.get(url).then(({ data }) => {
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
      setInfo(imageUrl)
    })
  }

  console.log("pokemon", pokemon);
  console.log("info", info);

  const updatedName = name.charAt(0).toUpperCase() + name.slice(1)

    return (
      <div className='card' onClick={setOpen(true)} >
        
        <img className='card__img' src={info} />
        <h2 className='card__name'>{updatedName}</h2>
        <div className="container">
          <button className={pokemon.type}>{pokemon?.type}</button>
          {setOpen?  <tbody>
        <tr>
            <td>Weight</td>
            <td>{pokemon.weight}</td>
        </tr>
    </tbody>
    :null }
        </div>
      </div>
    );
  }

  export default PokemonCard;