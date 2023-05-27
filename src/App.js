import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import "./app.scss"
import { useMemo } from 'react';


function App() {

  const [pokemonData, setPokemonData] = useState([]);
  let [limit, setLimit] = useState(12)
  const [open, setOpen] = useState(null)




  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then(res => {
        const pokemons = res.data.results;
        setPokemonData(pokemons);
      })
      .catch((error) => {
        console.log(error);
      })

  }, [limit])


  const handleClick = (e) => {
    if(limit>=100){
      alert("Ліміт досягнуто")
      return;
    }
    e.stopPropagation();
    setTimeout(setLimit(limit += 12), 1000)
    
  }
  const handleOpen = (name) => {
    if (open === name) {
      setOpen(null);
    } else {
      setOpen(name);
    }
  }


  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className='content'>

        {pokemonData?.map((item) =>
          <PokemonCard {...item} open={item.name === open} handleOpen={() => handleOpen(item.name)} />)}

       
        <button className='content__loading' onClick={handleClick}>Load more</button>
      </div>
    </div>
  );
}

export default App;
