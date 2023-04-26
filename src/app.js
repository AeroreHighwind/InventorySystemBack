const express = require("express");

const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require('cors');
require('dotenv/config')

app.use(cors({
  origin: ['http://localhost:3000/']
}));

//Import Routes
const loginRoute = require("./routes/login");
const inventoryRoute = require("./routes/inventory");
const createRoute = require("./routes/create");
//settings
app.set("port", 3000);

//Middlewares
app.use(express.json());
app.use(loginRoute);
app.use(inventoryRoute);
app.use(createRoute);
app.use(bodyParser.json())
//Routes

app.get("/", (req, res) => {
  res.send("Root route accesed");
});

//dbConnection
mongoose.connect(process.env.DB_CONNECTION);

//Listen
app.listen(app.get("port"));
console.log(`app listening on port ${app.get("port")}`);
