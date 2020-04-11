const express = require('express');

const routes = express.Router();

routes.delete('/', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({ viu : 'caramba' });
});

module.exports = routes;