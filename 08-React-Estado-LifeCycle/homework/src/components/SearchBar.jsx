import React,{useState} from 'react';
import styles from "./searchBar.module.css"

export default function SearchBar({onSearch}) { // extractoring reemplaza a props
  // acá va tu código
const [ city, setCity] = useState(""); // creo un estado "city" y su metodo para poder modificarlo "setCity" dentro del componente funcional (Hooks)
                                        // y seteamos el estado city como vacio 
  
  function handleInputChange (evento) { // esta funcion ante un cambio en el input, la va guardar en el estado
    setCity(evento.target.value) // evento.target.value es donde se guarda lo que el usuario escribe en el input
  }
  
  return (
  <div className={`${styles.divSearchBar}`}>
    <input className={`${styles.input}`} 
    placeholder="   Ciudad..." 
    value={city} 
    onChange={handleInputChange}
    
    /> 
    <button className={`${styles.btnagregar}`} 
    onClick={() => onSearch(city) } value={""} > Agregar </button>
    

  </div>
  )
};
// NOTA : value={city} Vinculamos el Input con el estado.....va a ir guardando dentro del estado city, lo que el usuario vaya tipeando en el input
//        onChange={handleInputChange} es un escuchador de evento de cambios en mi input, cuando suceda ejecuta la funcion que le paso




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