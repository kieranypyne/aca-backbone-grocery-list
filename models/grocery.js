const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  name : {
    type: String
  },
  amount : {
    type: Number
  },
  price : {
    type: Number
  },
  activated : {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('List', listSchema);
