'use strict';

const { bookshelf } = require('../db/database')

const Topping = bookshelf.Model.extend({
  tableName: 'topping'
})

module.exports = Topping
