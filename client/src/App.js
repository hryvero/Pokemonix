import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import "./app.scss"


function App() {
 
  const [pokemonData, setPokemonData] = useState([]);
  let [limit, setLimit]=useState(12)
  const [open, setOpen] = useState(null)


 
  useEffect(() => {
      axios
          .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
          .then(res => {
              const { data: { results } } = res;
              setPokemonData(results);
          })
          .catch((error) => {
              console.log(error);
          })
         
  }, [limit])


 const handleClick=(e)=>{
  e.stopPropagation();
  setLimit(limit+=12)

 }
 const handleOpen = (name) => {
  if(open === name) {
      setOpen(null);
  } else {
      setOpen(name);
  }
 }


  return (
    <div className="App">
    <h1>Pokedex</h1>
    <div className='content'>
      
      {pokemonData.map((item) =>
        <PokemonCard   {...item} open={item.name === open} handleOpen={() => handleOpen(item.name)}/>
      )}
      <button className='content__loading' onClick={handleClick}>Load more</button>
    </div>
    </div>
  );
}

export default App;
