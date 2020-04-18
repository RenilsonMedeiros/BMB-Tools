const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { id } = request.body;
    
    const users = await connection('users')
      .where('id', id)
      .select('name')
      .first();
    
    if(!users) return response.status(400).json({ error: "No user found with this ID" });
    else return response.json(users);
  }
}