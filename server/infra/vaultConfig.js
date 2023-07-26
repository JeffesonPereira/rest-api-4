require("dotenv").config();
const vault = require('node-vault')({
  endpoint: process.env.VAULT_URL,
  token: process.env.VAULT_TOKEN,
});


const getDatabaseCredentialsFromVault = async () => {
  const response = await vault.read('secret/data/ambiente/test');

  if (response && response.data) {
    return response.data.data;
  } else {
    throw new Error('Database credentials not found in Vault.');
  }
};


module.exports = getDatabaseCredentialsFromVault;