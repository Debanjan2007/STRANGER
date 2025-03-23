// imports
import express from "express";
import { handleNewUserData } from "./controller/index.js";

const router = express.Router();

router.post('/', handleNewUserData);

module.exports = router;