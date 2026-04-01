const {model} = require("mongoose");
const User = require("../models/userSchema");

let registrationController = (req,res) => {
    const {username,email,password} = req.body;

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