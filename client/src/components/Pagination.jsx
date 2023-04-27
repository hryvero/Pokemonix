import React from 'react';

function Pagination({pokemonsPerPage, pokemonData, paginate}) {
  const pageNumbers=[]

  for(let i=1; i<=Math.ceil(pokemonData/pokemonsPerPage); i++){
    pageNumbers.push(i)
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map(number=>
          (<li key={number}><a  className='page-link' href="#" onClick={paginate}>{number}</a></li>))}
      </ul>
      
    </div>
  );
}

export default Pagination;