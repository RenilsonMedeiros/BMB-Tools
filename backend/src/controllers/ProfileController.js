const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    user_id = request.headers.authorization;

    const tools = await connection('tools')
      .join('users', 'users.id', '=', 'tools.user_id')
      .where('user_id', user_id)
      .select('tools.*', 'users.name');

    return response.json(tools);
  }
}