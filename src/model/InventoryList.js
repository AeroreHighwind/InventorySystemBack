const mongoose = require ('mongoose')

const InventoryListSchema = mongoose.Schema({
    inventoryList: {
        type: JSON,
        required: true
      },
      date:{
        type: Date,
        default: Date.now
      }
  })
  
  module.exports = mongoose.model('InventoryList', InventoryListSchema);