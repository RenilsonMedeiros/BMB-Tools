const express = require('express');

const app = express();

app.use(express.json());

app.delete('/', (vem, vai) => {
  const body = vem.body;

  console.log(body);

  return vai.json({ viu : 'olha o nodemon funcionando!' });
});

app.listen(3333);