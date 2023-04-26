const mongoose = require ('mongoose')

const InventoryListSchema = mongoose.Schema({
    inventoryList: {
        type: JSON,
        required: true
      },
      date:{
        type: Date,
        required: true
      }
  })
  
  module.exports = mongoose.model('InventoryList', InventoryListSchema);