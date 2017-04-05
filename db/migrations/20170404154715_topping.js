exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('topping', function(table){
      table.increments('topping_id').primary();
      table.string('name').notNullable();

    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('topping')
};
