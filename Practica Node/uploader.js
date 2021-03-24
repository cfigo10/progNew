'use strict'

const http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra');

function serverUpload(req, res) {
    if (req.method.toLowerCase() == 'get') {
        let form = `
            <h1>Uploader de archivos en Node.js</h1>
            <form action="/upload" enctype="multipart/form-data" method="post">
                <div><input type="file" name="upload" required></input></div>
                <div><input type="submit" value="Subir Archivo"></input></div>
            </form>
        `;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(form);
    }

    if (req.method.toLowerCase() == 'post' && req.url == '/upload') {
        let form = new formidable.IncomingForm
    }
}


http.listen(3000);

console.log('Servidor corriendo en http://localhost:3000');