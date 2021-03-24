"use strict"


//Dom Document Object Model



function cambiaColor(color){
    caja.style.background = color;
}

//Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto en la caja desde el JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color ="white";
caja.className ="hola";

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");

/*
var contenidoTexto = todosLosDivs[2];
contenidoTexto.innerHTML = "Otro texto para el segundo elemento";
contenidoTexto.style.background = "red";*/
//console.log(contenidoTexto);

// todosLosDivs.forEach((valor,indice) =>{      Este forEach el recorrido no funciona si no estan definidos ya en el array

var seccion = document.querySelector("#miseccion");

var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
  if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);

}
}
seccion.append(hr);

//});


//Conseguir elementos por su clases css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";


var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
      divsRojos[div].style.background = "red";
    }
}


//querySelector
var id = document.querySelector("#encabezado");

 var claseRojo = document.querySelector(".rojo");

console.log(claseRojo);
