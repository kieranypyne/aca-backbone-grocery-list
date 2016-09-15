const _ = require('lodash');
const Backbone = require('backbone');

const GroceryView = Backbone.View.extend({

  el: `<li></li>`,

  initialize() {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: _.template(`
  <div>Item: <%= item.get("name") %></div>
  <div>Amount: <%= item.get("amount") %></div>
  <div>Price: <%= item.get("price") %></div>

  <div><input type="checkbox" <%= item.get('activated') ? 'checked' : '' %> /></div>
  `),

  events: {
  'click input[type="checkbox"]': 'handleCheckboxClick'
  },

  handleCheckboxClick(e) {
  this.model.save({ activated: e.target.checked});
  },

  render() {
    if (this.model.get('activated')) {
      this.$el.addClass('activated');
    } else {
      this.$el.removeClass('activated')
    }

    this.$el.html(this.template({ item: this.model }));
    return this;
  }
});

module.exports = GroceryView
