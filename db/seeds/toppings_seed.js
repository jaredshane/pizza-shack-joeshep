'use strict';
const toppings = require('./toppings');

exports.seed = (knex, Promise) => {
  let toppingsPromises = toppings.map( ({name}) => {
    return knex('topping').insert({name});
  });
  // Deletes ALL existing entries
  return knex('topping').del()
    .then( () => {
      // Inserts seed entries
      return Promise.all(toppingsPromises);
    });
};
