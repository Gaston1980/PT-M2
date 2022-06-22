import React from 'react';

// usando props //
/* export default function Card(props) {
  // acá va tu código
  return (
  <div>
      <button onClick={props.onClose} >
        X 
      </button>
      <h3> {props.name}</h3>
      <h5> Min </h5>
      <div> {props.min}</div>
      <h5> Max </h5>
      <div> {props.max}</div>
      <img scr={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
  </div>
  )
};*/


// usando extractoring en vez de props //

export default function Card({max, min, name, onClose, img}) { // traigo directamente el nombre de las propiedades que voy a usar ( me fijo en el componente padre que se va renderizar y que propiedades esta usando en Card)
  return (
  <div>
      <button onClick={onClose} class="Xbutton">
        X 
      </button>
      <h3>{name}</h3>
      <h5> Min </h5>
      <div>{min}</div>
      <h5> Max </h5>
      <div>{max}</div>
      <img scr={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
  </div>
  )
}; 