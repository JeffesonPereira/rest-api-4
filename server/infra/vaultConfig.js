require("dotenv").config();
const vault = require('node-vault')({
  endpoint: process.env.VAULT_URL,
  token: process.env.VAULT_TOKEN,
});

const readVariablesFromVault = async () => {
  const response = await vault.read('secret/data/ambiente/test');

  if (response && response.data) {
    const variables = response.data;

    console.log('Variáveis lidas do Vault:', variables);
  } else {
    throw new Error('Variáveis não encontradas no Vault.');
  }
};

readVariablesFromVault();