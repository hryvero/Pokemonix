import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import "./app.scss"

function App() {
 
  const [pokemonData, setPokemonData] = useState([]);


  useEffect(() => {
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


  return (
    <div className="App">
      {pokemonData.map((item) =>
        <PokemonCard  {...item} />
      )}
    </div>
  );
}

export default App;
