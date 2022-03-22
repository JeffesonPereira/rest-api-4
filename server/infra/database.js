require("dotenv").config();
const pgp = require('pg-promise')();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DN_NAME = process.env.DN_NAME;

const db = pgp({
	user: DB_USER,
	password: DB_PASSWORD,
	host: DB_HOST,
	port: DB_PORT,
	database: DN_NAME
});

module.exports = db;
