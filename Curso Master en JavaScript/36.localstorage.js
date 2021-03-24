"use strict"


//localstorage

//comprobar disponibilidad del localstorage

if (typeof(Storage) !== 'undefined') {
    console.log("localstorage Disponible");
} else {
    console.log("Incompatible con localstorage");
}

//guardar datos

localStorage.setItem("titulo", "Curso de Symfony");

//recuperar elemento

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");


//Guardar objetos
var usuario = {
    nombre: "Carlos Romero",
    email: "cromero@avla.com",
    web: "avla.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));


//recuperar objetos

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" " + userjs.web + " - " + userjs.nombre);


//localStorage.removeItem("usuario");

localStorage.clear();