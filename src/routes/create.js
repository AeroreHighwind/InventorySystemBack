const express = require("express");
const InventoryList = require("../model/InventoryList");

const router = express.Router();

//Post Routes

router.post("/inventory", async (req, res) => {
  const invList = new InventoryList({
    inventoryList: req.body.inventoryList,
    date: req.body.date,
  });
  try {
    const invListSaved = invList.save();
    res.end()
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router