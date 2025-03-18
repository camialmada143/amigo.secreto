// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creo un Array vacio
let amigos = [];
//Desarrollo Funcion
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputNombre = document.getElementById("amigo");
    // Elimino espacios en blanco
    const nombre = inputNombre.value.trim();

    // Valid0
    if (nombre === "") {
        //Creo alerta cuando no ingrea un nombre
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizo el array
    amigos.push(nombre);

    // limpio el campo
    inputNombre.value = "";

    // Actualizo la lista en la página
    actualizarLista();

    // Muestro la lista en la consola
    console.log(amigos);
}
// Limpio la lista 
function actualizarLista() {
    const listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = ""; 

    amigos.forEach(amigo => {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        listaNombres.appendChild(nuevoAmigo);
    });
}
function sortearAmigo() {
    // 1. Amigos disponibles
    if (amigos.length === 0) {
        alert("Por favor, ingrese amigos para el sorteo.");
        return; 
    }

    // Aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // El ganador
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre del ganador
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}

