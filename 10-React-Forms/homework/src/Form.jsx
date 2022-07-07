import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }
  
  return errors;
};





export default function  Form() {

  const [input, setInput] = React.useState({ // creo un solo estado con un objeto con propiedades que puedo ir agregando y 
    username: '',                           //    modificando sin necesidad de crear muchos estados distintos para cada una
    password: '',
  });

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function(e) {
    
    setInput({
      ...input, //copia lo que hay guardado en el estado input 
      [e.target.name]: e.target.value // modifica el estado con los nuevos valores que pasa el usuario
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value // uso bracket notation xq en un momento puede ser username y 
    }));                              // en otro puede ser password y asi me va servir para todas las propiedades que tenga

    }


  return (
    <form>
    <div>
      <label>Username:</label>
      <input className={errors.username && 'danger'} type="text" name="username" value={input.username} onChange={handleInputChange}   />
      {errors.username && (<p className="danger">{errors.username}</p>)}
    </div>
     <div>
      <label>Password:</label>
      <input className={errors.password && 'danger'} type="password" name="password" value={input.password} onChange={handleInputChange}  />
      {errors.password && (<p className="danger">{errors.password}</p>)}
    </div>
    <input type="submit" disabled={errors.username || errors.password ? true : false} /> 
  </form>
)
}

// NOTA: disabled={errors.username || errors.password ? true : false}   para que no se pueda submit si los datos estan incorrectos