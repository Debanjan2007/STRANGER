// imports 
import mongoose from "mongoose"; 

// user data schema 
const userDataSchema = new mongoose.Schema({
    user_name : {
        type : String ,
        required : true ,
    }, 
    user_email : {
        type : String ,
        unique : true ,
        required : true ,
    },
    user_img : {
        type : String ,
        required : true ,
    },
    user_ID : {
        type : String ,
        unique : true ,
        required : true ,
    }
}, {timestamps : true}) ;


// user data model
const userData = mongoose.model('userData' , userDataSchema) ;

// exports 
module.exports = { userData };