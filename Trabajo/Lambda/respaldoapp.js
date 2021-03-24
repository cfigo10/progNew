'use strict'

const express = require('express');
const app = express();
const makeConnection = require('./databaseConnection');

app.get('/hello', (req, res) => res.send('Hello world!'));

app.get('/horaDatabase', (req, res) => {
	let pool = makeConnection();
	
	pool.connect((err, client, release) => {
		if (err) {
			console.error('Error acquiring client', err.stack);
			let responseBody = {"Error": "Error acquiring client for DB"};
			pool.end(() => {
				console.log('pool has ended');
				res.send(responseBody);
			});
		}
		else {
			client.query('SELECT NOW()', (err, result) => {
				release();
				let responseBody;
				if (err) {
					console.error("Error executing query", err.stack);
					responseBody = {"Error": "Error executing query in DB"};
				}
				else {
					let resultado = result.rows;
					console.log(resultado);
					responseBody = {"data": resultado};
				}
				pool.end(() => {
  					console.log('pool has ended');
					res.send(responseBody);
				});
			});
		}
	});
	
});

app.use(function(req, res, next) {
  res.status(404).send({"Error": "Not found"});
});


module.exports = app;
