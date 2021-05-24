const fila = document.queryselector(".contenedor-carousel");
const pelicula = document.querySelector(".pelicula");

const flechaizquierda = document.getElementById("flecha-izquierda");
const flechaderecha = document.getElementById("flecha-derecha");

// ? flecha derecha e izquierda

flechaizquierda.addEventListener("click", () => {

    fila.scrollleft += fila.offsetWidth;

});

flechaderecha.addEventListener("click", () => {

    fila.scrollleft -= fila.offsetWidth;

});