import React from 'react';
import { useEffect, useState } from 'react';

function CardDetails({ pokemon }) {


  return (
    <div>
      <img className='card__img' src={pokemon?.imageUrl} />
      <table>
        <caption><h2 className='card__name'>{pokemon?.name}</h2></caption>
        <tr>
          <td>Type</td>
          <td>{pokemon?.type}</td>

        </tr>
        <tr>
          <td>Attack</td>
          <td>{pokemon?.attack}</td>
        </tr>
        <tr>
          <td>Defense</td>
          <td>{pokemon?.defense}</td>
        </tr>
        <tr>
          <td>HP</td>
          <td>{pokemon?.hp}</td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>{pokemon?.speed}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{pokemon?.weight}</td>
        </tr>
        <tr>
          <td>Total Moves</td>
          <td>{pokemon?.moves.length}</td>
        </tr>
      </table>
    </div>
  );
}

export default CardDetails;