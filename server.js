// imports
import express from "express";
import mongoose from "mongoose";
// import { connectToMongo } from 'connect.js' ;

const app = express();
const port = 8000;

// conneting to mongoDB
// connectToMongo("mongodb://localhost:27017/STRANGER_chat_app").then(() =>
//   console.log("Connected to MongoDB")
// );
mongoose
  .connect("mongodb://localhost:27017/STRANGER_chat_app")
  .then(() => console.log("connected to MOngoDB"));

// app run
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
