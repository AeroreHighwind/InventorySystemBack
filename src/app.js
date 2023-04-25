const express = require("express");

const app = express();
const mongoose = require("mongoose");
require('dotenv/config')

const loginRoute = require("./routes/login");
const homeRoute = require("./routes/home");
const createRoute = require('./routes/create')
//settings
app.set("port", 3000);

//Middlewares
app.use(express.json());
app.use(loginRoute);
app.use(homeRoute);
app.use(createRoute)
//Routes

app.get("/", (req, res) => {
  res.send("Root route accesed");
});

//dbConnection
mongoose.connect(process.env.DB_CONNECTION);

//Listen
app.listen(app.get("port"));
console.log(`app listening on port ${app.get("port")}`);
