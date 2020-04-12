const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    user_id = request.headers.authorization;

    const tools = await connection('tools')
      .where('user_id', user_id)
      .select('*');

    return response.json(tools);
  }
}