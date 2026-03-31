const {model} = require("mongoose");

let registrationController = (req,res) => {
    const {username,email,password} = req.body;
    console.log(username,email,password);
    res.send("hello world");
}

module.exports = {registrationController};