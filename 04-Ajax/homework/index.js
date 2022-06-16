
// HOMEWORK RESUELTA USANDO VANILLA JS - NO AJAX(JQUERY)
//GET de all friends
function getFriends() { // creo la funcion que mas adelante voy a pasar por parametro en el addEventListener
    //1. Limpia la lista anterior si es que hay, esto es para que cada vez que hago click no se acumule resultados
    let lista = document.getElementById('lista');
    lista.innerHTML = "";

    //2. Eliminamos el loading gif si es que no se eliminó antes
    let img = document.getElementsByTagName('img'); // [<img src='url'>]
    if(img.length > 0) {
        img[0].remove() // esto es un metodo de jquery, para poder usarlo debo tener en mi html la libreria jquery
    }

    //3. Traigo los amigos del server y creo la lista
    fetch("https://jsonplaceholder.typicode.com/users") //Hace una petición al servidor
    .then(response => response.json()) //Transformamos el json recibido en un obj.
    .then(response => { //Tengo un array con la lista de amigos
      response.forEach(amigo => { //[{amigo1}, {amigo2}, {amigo3}, {etc}]
        let li = document.createElement('li'); // <li></li>
        li.textContent = amigo.name; //<li>Toni</li>
        document.getElementById('lista').appendChild(li);// agrego al html el elemento creado <li>
      });           
    })
}

document.getElementById('boton').addEventListener('click', getFriends)


//Busco amigo por id
function searchFriend() { // defino la funcion que luego voy a pasar por parametro en el addEventListener
    let id = document.getElementById('input').value; //1
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // GET // concateno el id usando metodo ES6
    .then(response => response.json())
    .then(response => {
        document.getElementById('amigo').textContent = response.name; //  <span>Toni<span>
    })
    document.getElementById('input').value = ''; //Limpia el input para que no queden valores a la vista
}


document.getElementById('search').addEventListener('click', searchFriend)


//Borra amigos por id
function deleteFriends() { // defino la funcion que voy a pasar por parametro en el addEventListener
    let id = document.getElementById('inputDelete').value; //nro
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {  //delete
        method: 'DELETE'
    })
    .then(() => {
        alert('El amigo fue borrado')   // pongo que se muestre un alert
        getFriends() // invoco a la funcion creada arriba
    })
    document.getElementById('inputDelete').value = ''; //Limpia el input
}

document.getElementById('delete').addEventListener('click', deleteFriends);


 