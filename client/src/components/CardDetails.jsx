import React from 'react';
import { useEffect, useState } from 'react';

function CardDetails({ activeIdx, idx, handleClick, type, pokemon }) {


 

  // const toggle = () => {
  //   handleClick(type)
  //   console.log(type)
  // }
  
  // useEffect(() => {
  //   setIsOpen(activeIdx === type);
  // }, [activeIdx, type])

  return (
    <div> 
 
     
  <table ><tr>
    <td>Type</td>
    <td >{pokemon?.type}</td>
  </tr>
  <tr>
    <td>Attack</td>
    <td>{pokemon?.attack}</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td >Jazz</td>
  </tr></table>


    </div>
  );
}

export default CardDetails;