import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import "./app.scss"
// import Pagination from './components/Pagination';

function App() {
 
  const [pokemonData, setPokemonData] = useState([]);
  const [limit, setLimit]=useState(12)
  // const [currentPage, setCurrentPage]=useState(1)
  // const [pokemonsPerPage]=useState(12)

 
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
  setLimit(20)

 }



// const lastPokemonIndex=currentPage*pokemonsPerPage;
// const firstPokemonIndex=lastPokemonIndex-currentPage
// const curentPokemon=pokemonData.slice(firstPokemonIndex,lastPokemonIndex)

// const paginate=pageNumber=>setCurrentPage(pageNumber)

  return (
    <div className="App">
      {pokemonData.map((item) =>
        <PokemonCard  {...item} />
      )}
      <button onClick={handleClick}>Load more</button>
      {/* <Pagination pokemonsPerPage={pokemonsPerPage} pokemonData={pokemonData.length} paginate={paginate}/> */}
    </div>
  );
}

export default App;
