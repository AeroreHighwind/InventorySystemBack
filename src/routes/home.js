const { json } = require("express");
const express = require("express");
const Product = require("../model/Product");
const InventoryList = require("../model/InventoryList")
const router = express.Router();

//get all products
router.get("/home", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

//submit products
router.post("/home", async (req, res) => {
  const product = new Product({
    code: req.body.code,
    name: req.body.name,
    quantity: req.body.quantity,
  });
  try {
    const savedProduct = product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific product
router.get("/home/:prodId", async (req, res) => {
  try {
    const prod = await Product.findById(req.params.prodId);
    res.json(prod);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/home/:prodId", async (req, res) => {
  try {
    const deletedProd = await Product.findByIdAndRemove({
      _id: req.params.prodId,
    });
    res.json(deletedProd);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/home/:prodId", async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.prodId },
      {
        $set: {
          code: req.body.code,
          name: req.body.name,
          quantity: req.body.quantity,
        }
      }
    );
    res.send(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/inventory",async (req,res)=>{
    try {
        const invList = await InventoryList.find();
        res.json(invList);
    } catch (error) {
        res.json({message: error})
    }
})

router.post("/inventory", async (req, res) => {
    console.log(req.body.InventoryList)
    const invList = new InventoryList({
    inventoryList: req.body.inventoryList
    });
    try {
      const invListSaved = invList.save();
      res.json(invList);
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;
