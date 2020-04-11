const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/user', async (request, response) => {
  const { name, senha, admKey } = request.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('users').insert({
    id,
    name,
    senha,
    admKey,
  })

  return response.json({ id, name });
});

module.exports = routes;