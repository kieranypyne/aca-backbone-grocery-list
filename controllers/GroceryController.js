const GroceryModel = require('../models/grocery');

module.exports = {
  list: function(req, res) {
    GroceryModel.find(function (err, items) {
      res.json(200, items);
    });
  },

  show: function(req, res) {
  var id = req.params.id;
    GroceryModel.findOne({_id: id}, function(err, item) {
      return res.render('item_view', {item: item});
    });
  },

  edit: function(req, res) {
    var id = req.params.id;
    GroceryModel.findOne({_id: id}, function(err, item) {
      return res.render('item_edit', {item: item});
    });
  },

  create: function(req, res) {
    const item =  new GroceryModel({
      name: req.body.name,
      amount: req.body.amount,
      price: req.body.price
    });

    item.save((err, item) => {
      res.json(item);
    });
  },

  update: function(req, res) {
    var id = req.params.id;
    GroceryModel.findOne({_id: id}, function (err, item) {
      item.name = req.body.name;
      item.quantiy = req.body.quantity;
      item.activated = req.body.activated;

      item.save(function(err, item) {
        res.json(item);
      });
    });
  },

  remove: function(req,res) {
    var id = req.params.id;
    GroceryModel.findByItemAndRemove({_id: id}, function (err, item) {
      items.remove(item);
    });
    items.save(function(err, items) {
      res.redirect('/items');
    });
  },
};
