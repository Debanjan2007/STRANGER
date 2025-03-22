// imports
import express from "express";
import { handleNewUserData } from "./controller/index"; ;

const router = express.Router() ;


router.post('/' , handleNewUserData ) ;

module.exports = router ; 