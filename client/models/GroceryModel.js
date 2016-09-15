const Backbone = require('backbone');

const GroceryModel = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: '/items'
});

module.exports = GroceryModel;
