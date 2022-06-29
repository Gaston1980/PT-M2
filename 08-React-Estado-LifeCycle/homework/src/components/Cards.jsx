import React from 'react';
import Card from './Card.jsx'; 
import styles from "./cards.module.css" // x si quiero poner las cards en forma horizontal

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){ // aca verifica si tenes cities
  return (                  
    <div className={styles.divCards}> 
      {cities.map(elem => <Card   // mapea el array cities y crea una componenete card x cada elemento del array cities
      
      key={elem.id} // lo uso para que no me tire un warning, esta propiedad la tiene cada elemento que voy a correr (fijarse en data.js)
      name={elem.name} 
      max={elem.max} 
      min={elem.min} 
      img={elem.img} 
      onClose={onClose} 
      id={elem.id}
      />  
      )}
      </div>
    )
  } else {
    return(
      <div>
        Sin ciudades
      </div>
    )
  }
}