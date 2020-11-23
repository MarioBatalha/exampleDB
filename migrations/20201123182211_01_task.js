
exports.up = function(knex) {
    return knex.schema.createTable('task', (table) => {
        table.increment();
        table.string('title').notNullable();
        table.string('class').notNullable();
        table.string('subject').notNullable();
        table.string('teacher').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('task');
};
