"use strict"


//Funciones FuncAnonimas
//Es una funcion que no tiene nombre
/*Funcion Flecha
sumame(5,7, function(dato){
    console.log("La suma es:", dato);
  }
Es igual a

sumame(5,7, dato => {
        console.log("La suma es:", dato);
}
*/
/*
var pelicula = function(nombre){
    return "La pelicula es: " + nombre;

}*/


function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar= num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

  return sumar;
}

sumame(5,7, function(dato){
    console.log("La suma es:", dato);

},
function(dato){
    console.log("La suma por dos es:", (dato*2));

});
