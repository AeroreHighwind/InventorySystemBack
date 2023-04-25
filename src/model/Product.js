const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type:String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Product', ProductSchema);