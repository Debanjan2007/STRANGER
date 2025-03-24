// imports 
const {userData} = require("../models/index.js");
const shortid = require("shortid") ;

// handle user data when creating a new user 
const handleNewUserData = async (req , res) => {
    try{
        const body = req.body ; //taking the body from the request
    const user_ID = shortid.generate(); //generating a unique user ID
    if(!body) {
        return res.status(400).json({
            success : false ,
            error : 'You must provide a user data' ,
        })
    }
    await userData.create({
        user_name: body.user_name, 
        user_email: body.user_email,
        user_img: body.user_img,
        user_ID: user_ID, 
    })
    
    return res.status(200).json( {
            success : true ,
            msg : "user created successfuly" ,
            user_ID : `${user_ID}` ,
        }
    );
    }catch (err) {
        if(err.code === 11000){
            return res.status(400).json({
                success : false ,
                msg : "user or email already exists" ,
            })
        }
        console.error("Error occurred while creating user:", err);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
    
}
module.exports = { handleNewUserData } ; 