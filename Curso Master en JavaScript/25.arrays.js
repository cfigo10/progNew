"use strict"


//Arrays, arreglos, matrices

var nombre= "Carlos Romero";
var nombres= ["Carlos Romero", "Luis Perez", 52,true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

/*
console.log(nombres.length);
console.log(lenguajes[2]);*/



/*
var elemento = parseInt (prompt("Qué elemento del array quieres?", 0));
if (elemento>= nombres.length){
    alert("Introduce un numero correcto menor que " + nombres.length);

  }else{
      alert("El usuario seleccionado es: "+nombres[elemento]);

  }*/

document.write("<h1>Lenguajes de Programación del 2018</h1>");
document.write("<ul>");
/*
lenguajes.forEach((elemento, index, data)=>{
  document.write("<li>" + elemento + "</li>");

});*/



for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

/*
for (var i=0; i< lenguajes.length; i++){
  document.write("<li>"+lenguajes[i]+"</li>");
}*/


document.write ("</ul>");


//busquedas

/*
var busqueda = lenguajes.find(function(lenguaje){
      return lenguaje == "PHP";
});*/

//Lo siguiente es igual a lo de arriba pero mas simple con fucnion flecha

//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
//.findIndex para sacar el indice de lo que se está buscando
var precios = [10,20,50,80,12];
var busqueda = precios.some(precio => precio > 80);


console.log (busqueda);
