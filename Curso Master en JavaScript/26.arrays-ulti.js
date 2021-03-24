"use strict"


var categorias = ['Acción','Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

peliculas.sort(); //sort ordena el array
peliculas.reverse();// ordena al reves el array

console.log(peliculas);

var cine= [categorias,peliculas];

/*
console.log (cine[0][1]);
console.log (cine[1][2]);*/

//Agregar y sacar elementos del

/*
var elemento = "";

do{
  elemento= prompt("Introduce tu pelicula");
  peliculas.push (elemento);
}while(elemento !="acabar")
peliculas.pop();*/

var indice = peliculas.indexOf('Gran torino');

if(indice > -1){
  peliculas.splice(indice,1); //el uno indica la cantidad de elementos que se quieren borrar a partir del indice.
}


var peliculasString = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array= cadena.split(", ");

console.log(peliculasString);
console.log(cadena_array);
