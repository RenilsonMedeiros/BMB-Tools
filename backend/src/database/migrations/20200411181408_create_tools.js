
exports.up = function(knex) {
  return knex.schema.createTable('tools', function (table) {
    table.string('toolName');
    table.string('date');
    table.string('requester');
    table.string('description');

    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tools');
};
