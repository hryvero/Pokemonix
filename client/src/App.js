import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';

const api_base = 'http://pokeapi.co/api/v2/pokemon?limit=5&offset=0';

function App() {

  const [pokemon, setPokemon] = useState([])
  const [data, setData] = useState([])



 
  const [pokemonData, setPokemonData] = useState([]);


  useEffect(() => {
    console.log('TEST')
      axios
          .get("https://pokeapi.co/api/v2/pokemon?limit=10")
          .then(res => {
              const { data: { results } } = res;
              setPokemonData(results);
          })
          .catch((error) => {
              console.log(error);
          })
  }, [])

 

    console.log("pokemonData", pokemonData)

    console.log( data)

  return (
    <div className="App">
      {pokemonData.map((item) =>
        <PokemonCard  {...item} />
      )}
    </div>
  );
}

export default App;
