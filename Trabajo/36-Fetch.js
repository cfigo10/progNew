'use strict'

//Fetch (ajax) y peticiones a servicios / apis rest
var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')
        /*      .then(function(data) {
                return data.json()
                })
        Esto sería lo mismo que lo siguiente*/
    .then(data => data.json())
    .then(data => {
        usuarios = data;
        console.log(usuarios);

    });


