// imports
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const bodyParser = require('body-parser');

// Configering app and port
const app = express();
const port = 8000;

// mmiddlewares 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()) ;
app.use("/login" , router);

// conneting to mongoDB
mongoose
  .connect("mongodb://localhost:27017/STRANGER_chat_app")
  .then(() => console.log("connected to MOngoDB"));

// app run
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
