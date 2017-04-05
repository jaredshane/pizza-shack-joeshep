exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('orders', function(table){
      table.increments('order_id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.string('size').notNullable();
      table.specificType('toppings', knex.raw('text[]')).notNullable().defaultTo('{"cheese"}')
    })
};

exports.down = (knex, Promise) => knex.schema.dropTable('orders')