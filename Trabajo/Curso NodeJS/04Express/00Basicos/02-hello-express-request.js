'use strict'

var express = require ('express'),
    app = express();

    app
        .get ('/', (req, res) => {
            res.end('<h1> Hola Mundo desde express JS</h1>')
        })

        .get ('/user/:id-:name-:age', (req, res) => {
            res.end(`
            <h1> ${req.params.name}, Bienvenido a express JS tu id es <b>${req.params.id}
                    </b> y tienes ${req.params.age} a&ntilde;os
            </h1>`)
        })

        .get ('/search', (req, res) => {
            res.end(`
                <h1> 
                    Bienvenido a express JS, los resultados de tu b&uacute;squeda son:
                    <mark>${req.query.s}</mark>
                </h1>
                `)
             })

        .listen(3000)
    
    console.log('Iniciando Express en el puerto 3000');