const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const users = await connection('users').select('*');
  
    response.json(users);
  },

  async create(request, response) {
    const { name, senha, admKey } = request.body;
  
    if(admKey != "myKey") return response.status(401).json({ error: "Operation not permitted" });
  
    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('users').insert({
      id,
      name,
      senha,
    })
  
    return response.json({ id, name });
  }
}