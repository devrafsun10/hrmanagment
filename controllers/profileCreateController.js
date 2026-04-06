
const Profile = require("../models/profileCreateModel");


let profileCreateController = async (req,res) => {
    const { email, name, phoneNumber, bloodGroup, gender, dob,} = req.body;

    const profile = new Profile({
        email : email,
        name : name,
        phoneNumber : phoneNumber,
        bloodGroup : bloodGroup,
        gender : gender,
        dob : dob,
        

    })//we used the profile model to create a new profile document with the data recived from the frontend in the request body and save it to the database

    profile.save()// for saving the profile to the database
    res.status(201).json({
        status : true,
        message : " profile created "
    })

    console.log("test",profile);
    
}

module.exports = { profileCreateController }