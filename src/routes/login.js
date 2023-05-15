const express = require("express");
const User = require("../model/User");
const router = express.Router();

const bcrypt = require('bcrypt')

router.get("/login", (req, res) => {
  res.send("Login route");
});

router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      // If a user with the same username already exists
      return res.status(409).send("Username already exists");
    }
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.send(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

// router.post("/register", async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const newUser = new User({
//       username: req.body.username,
//       password: hashedPassword,
//     });
//     const savedUser = newUser.save()
//     res.end()
//   } catch (error) {
//     console.log(error)
//     res.end()
//   }
// });

router.get("/users", async (req,res)=>{
    try {
        const userList = await User.find();
        res.json(userList);
      } catch (error) {
        res.json({ message: error });
      }
})
module.exports = router;
