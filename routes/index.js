// imports
const express = require("express");
const { handleNewUserData } = require("../controller/index.js"); // ensure correct path

const router = express.Router();

router.post('/', handleNewUserData);

// exports 
module.exports = router;
