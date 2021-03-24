"use strict"


/*
1.Pida 6 numeros por pantalla y los meta en arrays
2.Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3.Ordenarlo y mostrarlo
4.Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(se valorara el uso de funciones)
*/

var numeros = [];

function arreglo(){
    for(var i=0; i<6;i++){
        numeros.push(parseInt(prompt("Por favor introduce 6 números")));
    }
}

function ordenAsc(){
numeros.sort();
document.write("<ul>");

    for(let numero in numeros){
      document.write("<li>" + numeros[numero] + "</li>");
    }
document.write("</ul>");
}

function ordenDesc(){
numeros.reverse();
document.write("<ul>");

    for(let numero in numeros){
      document.write("<li>" + numeros[numero] + "</li>");
    }
document.write("</ul>");
    //lo hizo con for each
    /*
    function mostrarArray (elementos,textoCustom = ""){
    document.write("<h1>Contenido del Array" + textoCustom + "</h1>");
    document.write("<ul>");
      numeros.forEach((numero,index) =>{
          document.write("<li>" + numero + "</li>);
    });
    document.write("<ul>")
  }


  //Luego usa el metodo .sort y llama a la funcion mostrarArray, luego .reverse y llama a la funcion nuevamente
  //Importante que para ordenar los numeros utiliza  numeros.sort(function(a,b){return a-b});
    */

}



arreglo();
document.write(numeros);
document.write(numeros.length);
console.log(numeros);
ordenAsc();
ordenDesc();

var busquedaElemento = numeros.find(numeros => numeros == 8);
console.log(busquedaElemento);

var busquedaIndice = numeros.find(numeros => numeros == 8);
console.log(busquedaIndice);

//Asi hizo la busqueda
/*
var busqueda = parseInt(prompt("Busca un numero",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

  if (posicion && posicion != -1){
  document.write("<h1>" Encontrado</h1>);
  document.write("<h1>" Posición de la busqueda: "+ posicion+"</h1>");
}else{
document.write("<h1>" No encontrado</h1>);
}


*/
