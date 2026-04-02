const {model} = require("mongoose");
const User = require("../models/userSchema");

let registrationController = async (req,res) => {
    const {username,email,password} = req.body;

    //check existing user
    let exsistingUser = await User.find({email: email}) //for checking if the user with the same email already exists in the database

    if(exsistingUser){
        return res.status(400).json({ 
            success: false,
            message: "User with this email already exists"
        })
    }//we used return statement to stop the execution of the function if the user with the same email already exists in the database and send a response to the frontend with a message that the user with this email already exists


     //todo for next -> validation 

    let createUser = new User({
        username: username,
        email: email,
        password: password,
    })
    
    createUser.save();//for saving the user to the database

    res.send({
        id: createUser._id,
        username: createUser.username,
        email: createUser.email,
    }) //for sending the created user as a response to the fontend
   

    //
}

module.exports = {registrationController};