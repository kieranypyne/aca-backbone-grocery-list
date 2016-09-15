const Backbone = require('backbone');
const GroceryModel = require('../models/GroceryModel');
const GroceryView = require('./GroceryView');

const GroceryListView = Backbone.View.extend({
  el: `
  <div>
    <form>
      <div>
        <label for="name">Item:</label>
        <input type="text" name="name" />
      </div>

      <div>
        <label for="amount">Amount:</label>
        <input type="text" name="amount" />
      </div>

      <div>
        <label for="price">Price:</label>
        <input type="text" name="price" />
      </div>

      <input type="submit" value="Submit" />
    </form>

    <ul></ul>
  </div>
  `,

  initialize() {
  this.listenTo(this.collection, 'update', this.render);
},

  events: {
    'submit form': 'handleFormSubmit'
  },

  handleFormSubmit(e) {
    const form = $(e.target);
    const item = new GroceryModel({
      name: form.find('input[name="name"]').val(),
      amount: form.find('input[name="amount"]').val(),
      price: form.find('input[name="price"]').val(),
    });

    item.save(null, {
      success: () => {
        this.collection.add(item);
        form.find('input[type="text"]').val('');
        this.render();
      }
    });

    e.preventDefault();
  },

  render() {
    this.$el.find('ul').html('');

    this.collection.forEach((item) => {
      const groceryView = new GroceryView({ model: item });
      this.$el.find('ul').append(
        groceryView.render().el
      );
    });
    return this;
  }
});

module.exports = GroceryListView;
