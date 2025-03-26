// imports
const express = require("express");
const { handleNewUserData } = require("../controller/index.js"); // ensure correct path
const path = require('path');

const router = express.Router();

router.post('/', handleNewUserData);
router.get('/', (req , res) => {
    res.json({status : "pending"}) ;
})

// exports 
module.exports = router;
