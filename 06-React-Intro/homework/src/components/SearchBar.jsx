import React from 'react';

export default function SearchBar({onSearch}) { // extractoring reemplaza a props
  // acá va tu código
  return (
  <div>
    <input placeholder="Ciudad..." /> 
    <button onClick={onSearch}> Agregar </button>

  </div>
  )
};

// lo hago con componente de clase //

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