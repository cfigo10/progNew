"use strict"


//timers
window.addEventListener('load', () => {

function intervalo(){
    var tiempo = setInterval( () => {      //permite ejecutar un trozo de codigo cada x segundos
          console.log("Set interval ejecutado");

          var encabezado = document.querySelector("h1");
          if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px";
        }else{
              encabezado.style.fontSize = "50px";

        }
      }, 1000);
      return tiempo;
}

var tiempo = intervalo();

var stop = document.querySelector("#stop");

stop.addEventListener("click", () => {
  alert("Haz parado el intervalo en bucle");
  clearInterval(tiempo);

});

var start = document.querySelector("#start");

start.addEventListener("click", () => {
  alert("Haz Iniciado el intervalo en bucle");
  intervalo();

});


  /*
var tiempo = setTimeout( () => {      //permite ejecutar un trozo de codigo una vez a determinado tiempo
      console.log("SetTimeout ejecutado");

      var encabezado = document.querySelector("h1");
      if(encabezado.style.fontSize == "50px"){
        encabezado.style.fontSize = "30px";
    }else{
          encabezado.style.fontSize = "50px";

    }
  }, 1000);
*/




});
