"use strict"

//Funciones

function calculadora(numero1, numero2, mostrar=false){

  //conjunto de instrucciones a ejecutar

  if(mostrar == false){

  console.log( "Suma: " + (numero1+numero2));
  console.log( "Resta: " + (numero1-numero2));
  console.log( "Multiplicación: " + (numero1*numero2));
  console.log( "División: " + (numero1/numero2));
  console.log( "*******************************");
}else{
  document.write( "Suma: " + (numero1+numero2) + "<br/>");
  document.write( "Resta: " + (numero1-numero2) + "<br/>");
  document.write( "Muultiplicación: " + (numero1*numero2) + "<br/>");
  document.write( "División: " + (numero1/numero2) + "<br/>");
  document.write( "*************************"+ "<br/>");



}
}


calculadora(1,4);
calculadora(2,5,true);
