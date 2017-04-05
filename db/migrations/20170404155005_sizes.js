exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('sizes', function(table){
      table.increments('size_id').primary();
      table.string('name').notNullable();
      table.integer('inches').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('sizes')
};
