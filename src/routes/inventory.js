const express = require("express");
const InventoryList = require("../model/InventoryList");
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

router.get("/inventory/:date", async (req, res) => {
  // Get the date from parameters
  const dateStr = req.params.date;

  // Split the date string into day, month, and year components
  const [day, month, year] = dateStr.split("-");

  // Create a new Date object using the year, month, and day components
  const dateObj = new Date(`${year}-${month}-${day}`);

  try {
    const invList = await InventoryList.find({ date: dateObj });
    res.json(invList);
  } catch (error) {
    res.json({ message: error });
  }
});


module.exports = router;
