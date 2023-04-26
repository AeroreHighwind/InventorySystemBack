const express = require("express");

const router = express.Router();

//Get Routes
router.get("/inventory", async (req, res) => {
  try {
    const invList = await InventoryList.find();
    res.json(invList);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
