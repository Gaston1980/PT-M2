import React from 'react';
import Card from './Card.jsx'; 
import styles from "./cards.module.css" // x si quiero poner las cards en forma horizontal

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (                  
    <div className={styles.divCards}> 
      {cities.map(elem => 
      <Card 
      key={elem.id} // lo uso para que no me tire un warning, esta propiedad la tiene cada elemento que voy a correr (fijarse en data.js)
      name={elem.name} 
      max={elem.main.temp_max} 
      min={elem.main.temp_min} 
      img={elem.weather[0].icon} 
      onClose={() => alert(elem.name)} 
      />  
      )}
      </div>
    )}
  