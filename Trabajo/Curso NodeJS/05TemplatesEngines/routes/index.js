'use strict'

var express = require('express'),
    router = express.Router();

router.get('/', (req,res) => {
    res.end('<h1>Terminamos la config de la primer app en express</h1>')
})

module.exports = router;