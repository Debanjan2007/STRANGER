// imports
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index";

const app = express();
const port = 8000;

// mmiddlewares 
app.use(express.json()) ;
app.use("/" , router)

// conneting to mongoDB
mongoose
  .connect("mongodb://localhost:27017/STRANGER_chat_app")
  .then(() => console.log("connected to MOngoDB"));

// app run
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
