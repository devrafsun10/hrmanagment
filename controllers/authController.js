const {model} = require("mongoose");

let registrationController = (req,res) => {
    const {username,email,password} = req.body;
    
    //todo for next -> validation 

    //
}

module.exports = {registrationController};