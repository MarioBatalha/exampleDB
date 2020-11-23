
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.increment();
      table.string('name').notNullable();
      table.string('password').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.createTable('users');
};
