"use strict"


//Eventos del ratónext

window.addEventListener('load',function(){

  function cambiarColor(){
      var bg = boton.style.background;

      if (bg == "green"){
      boton.style.background = "red";
    }else{
      boton.style.background = "green";
    }
    return true;
  }

  var boton = document.querySelector("#boton");

  //Click
  boton.addEventListener('click', function(){
    cambiarColor();
    console.log (this);
    this.style.border = "10px solid black";
  });

  //mouseover

  boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
  });

  //mouseout

  boton.addEventListener('mouseout', function(){
    boton.style.background = "yellow";
  });

  //focus
  var input = document.querySelector('#campo_nombre');
  input.addEventListener('focus', function(){
    console.log("Estas dentro del input");
  });

  //blur

  var input = document.querySelector('#campo_nombre');
  input.addEventListener('blur', function(){
    console.log("Estas fuera del input");
  });

  //keydown

  input.addEventListener('keydown', function(event){
    console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode));
  });

  //keypress(

  input.addEventListener('keypress', function(event){
    console.log("Tecla presionada", String.fromCharCode(event.keyCode));
  });

  //keyup

  input.addEventListener('keyup', function(event){
    console.log("Tecla soltada", String.fromCharCode(event.keyCode));
  });

});
