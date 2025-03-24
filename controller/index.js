// imports 
const {userData} = require("../models/index.js");
const shortid = require("shortid") ;
const axios = require('axios');

// recaptcha code 
const RECAPTCHA_SECRET_KEY = '6LdF4cQaAAAAAFZgP6H4L8V2sLQ0k9QoRJX7t3Qe';

// handle user data when creating a new user 
const handleNewUserData = async (req , res) => {
    try{
        const body = req.body ; //taking the body from the request
        const recaptchaResponse = body['g-recaptcha-response'];

        // Verify reCAPTCHA token with Google
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;

        const recaptchaRes = await axios.post(verificationUrl);

        // Check if reCAPTCHA verification failed
        if (!recaptchaRes.data.success) {
            return res.status(400).json({
                success: false,
                error: "reCAPTCHA verification failed. Please try again.",
            });
        }
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
            return res.send(`
                <h1> Duplicate key error </h1>
                <p> User with this email already exists </p>
                `)
        }
        console.error("Error occurred while creating user:", err);
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
    
}
module.exports = { handleNewUserData } ; 