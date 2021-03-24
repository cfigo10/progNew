"use strict"


//Transformación de textos

var numero = 444;
var texto1 = "Bienvenido al curso";
var texto2 = "es muy buen curso";

/*
var dato = numero.toString();

    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

console.log(dato);

//Calcular longitud

var nombre ="Hola";
nombre= ["hoa","adios"];

console.log (nombre.length);

//Concatenar = Unir textos
var textoTotal= texto1 + " " + texto2;
// o var textoTotal = texto1.concat(" " + texto2);

console.log (textoTotal);*/

//Para hace busquedas
var busqueda = texto1.indexOf("curso");
console.log(busqueda);
//se puede usar también texto1.lastIndexOF() , ó .search(), ó .match() devolviendote un array con las palabras que ha encontrado

//con el .substr(14,5) saca la palabra que empieza en la posicion 14 y 5letras despues de estar
//.charAt(44) te saca la letra en especifico en esa ubicaciónext
//.startWith("asd") te dice si es verdadero que empiece la cadena con lo colocado
//.endWith("asd") lo contrario a lo anterior
//.includes("curso") te devuelve true o false si encuentra lo colocado
//.replace("curso, catedra") busca y reemplaza un String
//.slice(14) corta el string a partir del caracter se indique
//.split(" ") te agrega en un array todas las palabras que esten separadas por un espacio
//.trim() te quita los espacios por delante y por detras a la cadena o variables
