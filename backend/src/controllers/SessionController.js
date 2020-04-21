const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { name, senha } = request.body;

    const user = await connection('users')
      .where('name', '=', name)
      .andWhere('senha', '=', senha)
      .select('id', 'name')
      .first();
    
    if(!user) return response.status(400).json({ error: "No user found with this ID" });
    else return response.json(user);
  }
}