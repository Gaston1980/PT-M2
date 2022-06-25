import React from 'react';
import styles from "./card.module.css"
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

export default function Card({max, min, name, onClose,img}) { // traigo directamente el nombre de las propiedades que voy a usar ( me fijo en el componente padre que se va renderizar y que propiedades esta usando en Card)
  return (
  <div className={`${styles.divCard}`}>
      <button className={`${styles.btnx}`} onClick={onClose}>
        X 
      </button>
      <h3 className={`${styles.cityh3}`}>{name}</h3>
      <h5 className={`${styles.minh5}`} > Min </h5>
      <div className={`${styles.mindiv}`}>{min}</div>
      <h5 className={`${styles.maxh5}`}> Max </h5>
      <div className={`${styles.maxdiv}`}>{max}</div>
      <img className={styles.weatherIcon} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""></img> 
  </div>
  )
}; 