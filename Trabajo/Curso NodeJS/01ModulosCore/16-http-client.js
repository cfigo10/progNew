'use strict'


var http = require ('http'),
    options = {
        host : 'sagr.avla.com',
        port : 3000,
        path : '/',
    }

http
    .get(options, function (res){
    console.log(`El sitio ${options.host} ha respondido. Codigo de Estado: ${res.statusCode}`)
    })
    .on('error', function (err){
        console.log(`El sitio ${options.host} no respondió. Codigo de Estado: ${err.code}. Error: ${err.message}`)
    })

