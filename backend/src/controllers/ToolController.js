const connection = require('../database/connection');

module.exports = {
  async index(request, response) {

    const [count] = await connection('tools').count();

    const tools = await connection('tools')
      .join('users', 'users.id', '=', 'tools.user_id')
      .select(['tools.*', 'users.name']);
    
    response.header('X-Total-Count', count['count(*)']);

    response.json(tools);
  },

  async create(request, response) {
    const { toolName, date, requester, description } = request.body;
    const user_id = request.headers.authorization;

    const [id] = await connection('tools').insert({
      toolName,
      date,
      requester,
      description,
      user_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.headers.authorization;

    tools = await connection('tools')
      .where('id', id)
      .select('user_id')
      .first();

    if(tools.user_id != user_id) return response.status(401).json({ error: "Operation not permitted" });

    await connection('tools').where('id', id).delete();

    return response.status(204).send();
  }
}