require("dotenv").config();
const pgp = require('pg-promise')();

const db = pgp({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DN_NAME
});

export default db;
