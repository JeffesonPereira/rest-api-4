const pgp = require('pg-promise')();
const getDatabaseCredentialsFromVault = require('./vaultConfig');

let dbInstance;

const getDbInstance = async () => {
  if (!dbInstance) {
    try {
      const dbCredentials = await getDatabaseCredentialsFromVault();

      dbInstance = pgp({
        user: dbCredentials.DB_USER,
        password: dbCredentials.DB_PASSWORD,
        host: dbCredentials.DB_HOST,
        port: dbCredentials.DB_PORT,
        database: dbCredentials.DN_NAME
      });
    } catch (error) {
      console.error('Error connecting to the database:', error.message);
      process.exit(1);
    }
  }

  return dbInstance;
};

module.exports = {
  getDbInstance,
  pgp,
};