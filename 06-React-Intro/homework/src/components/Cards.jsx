import React from 'react';
import Card from './Card.jsx'; 

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (                   // no hace falta poner adentro de un <di> xq estoy devolviendo un componente Card, es todo logica
      cities.map(elem => 
      <Card 
      key={elem.id} // lo uso para que no me tire un warning, esta propiedad la tiene cada elemento que voy a correr (fijarse en data.js)
      name={elem.name} 
      max={elem.main.temp_max} 
      min={elem.main.temp_min} 
      img={elem.weather[0].icon} 
      onClose={() => alert(elem.name)} 
      />  
      )
    )}
  
  
  
