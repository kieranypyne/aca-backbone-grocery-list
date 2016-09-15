const Backbone = require('backbone');
const GroceryModel = require('../models/GroceryModel');

const GroceryCollection = Backbone.Collection.extend({
  url: '/items',
  model: GroceryModel
});

module.exports = GroceryCollection;
