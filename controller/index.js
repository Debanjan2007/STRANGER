// imports 
import { userData } from '../models/index';
import shortid from 'shortid';

// handle user data when creating a new user 
export const handleNewUserData = async (req , res) => {
    const body = req.body ; //taking the body from the request
    const user_ID = shortid.generate(); //generating a unique user ID
    if(!body) {
        return res.status(400).json({
            success : false ,
            error : 'You must provide a user data' ,
        })
    }
    await userData.create({
        userNamw : body.user_name ,
        userEmail : body.user_email ,
        userImg : body.user_img ,
        userID : body.user_ID ,
    })
    return res.status(200).json( {
            success : true ,
            msg : "user created successfuly" ,
        }
    );
}
// module.exports = { handleNewUserData } ; 