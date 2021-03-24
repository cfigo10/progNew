'use strict'

var http = require('http').createServer(webServer),
    path = require('path'),
    urls = [{
            route: '',
            output: '<h2>Home</h2>'
        },
        {
            route: 'acerca',
            output: '<h2>Acerca</h2>'
        },
        {
            route: 'contacto',
            output: '<h2>Contacto</h2>'
        }
    ];

function webServer(req, res) {
    var message = '<h1>Hola Node.JS</h2>',
        pathURL = path.basename(req.url);

    console.log(pathURL);

    urls.forEach(function(pos) {
        if (pos.route == pathURL) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(message + pos.output)
        }
    })

    if (!res.fineshed) {
        res.writeHead(400, { 'Content-Type': 'text/html' })
        res.end('<h1> Error 404: Not Found</h1>')
    }
}

http.listen(3000);

console.log('Servidor corriendo en http://localhost:3000/');