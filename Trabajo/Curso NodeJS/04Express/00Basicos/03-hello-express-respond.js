'use strict'

var express = require ('express'),
    app = express();

    app
        .get ('/', (req, res) => {
            //res.end('<h1> Hola Mundo desde express</h1>')
            res.send('<h1> Hola Mundo desde express</h1>');
        })

        .get ('/equiis', (req, res) => {
            //res.end('<h1> Hola Mundo desde express</h1>')
            //res.send('<h1> Bienvenidos a Equiis</h1>')
            res.redirect(301, 'http://toolbox.avla.com');
        })

        .get ('/json', (req, res) => {
            res.json({
                name: "Carlos",
                age: 34,
                twitter: "@romerocarlos10"
            })
        })

        .get ('/render', (req, res) => {
            //res.end('<h1> Hola Mundo desde express</h1>')
            res.render('assets/index.html');
        })

        .listen(3000)
    
    console.log('Iniciando Express en el puerto 3000');