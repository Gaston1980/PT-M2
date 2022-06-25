import React from 'react';
import styles from "./searchBar.module.css"

export default function SearchBar({onSearch}) { // extractoring reemplaza a props
  // acá va tu código
  return (
  <div className={`${styles.divSearchBar}`}>
    <input className={`${styles.input}`} placeholder="   Ciudad..." /> 
    <button className={`${styles.btnagregar}`} onClick={onSearch}> Agregar </button>

  </div>
  )
};

// Ejem lo hago con componente de clase //

/* export class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="Ciudad..." /> 
        <button onClick={onSearch}> Agregar </button>
      </div>
    )
  }
} */