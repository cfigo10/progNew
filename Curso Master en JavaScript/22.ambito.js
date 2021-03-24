"use strict"


//Ámbito de las Funciones, variables locales t globales

function holaMundo(texto){
  var hola_mundo = "Texto dentro de función"
  console.log(texto);
  console.log(numero);
  console.log(hola_mundo);

}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);
