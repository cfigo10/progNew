"use strict";
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //termina bien
        // resolve();
        //termina mal
        reject();
    }, 1500);
});
console.log("Paso 1");
prom1.then(function () {
    console.log("Ejecutarme si termina bien!");
}, function () {
    console.error("Ejecutarme si termina mal");
});
console.log("Paso 2");
