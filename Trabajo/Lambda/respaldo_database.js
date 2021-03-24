'use strict'

const { Pool } = require("pg");

const makeConnection = function() {
	let pool = new Pool({
	  user: "inventario_cl_app",
	  host: "inventario-dev-api-db.avla.com",
	  database: "inventario_cl_app",
	  password: "inventario_cl_app_2019_k62fZNhGJ8xUSPqu",
	  port: 5432,
	});
	return pool;
}

module.exports = makeConnection;