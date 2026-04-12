
const Profile = require("../models/profileCreateModel");


let profileCreateController = async (req,res) => {
    const { email, name, phoneNumber, bloodGroup, gender, dob, designation } = req.body;

    let existingProfile = await Profile.findOne({ email: email})//for checking if the profile with the same email already exists in the database

    if(existingProfile){
        return res.status(400).json({
            status : false,
            message : "profile with this email already exists"
        })
    }//we used return statement to stop the execution of the function if the profile with the same email already exists in the database and send a response to the frontend with a message that the profile with this email already exists

    let firstThreeLetter = name.slice(0,3)//we used the slice method to get the first three letters of the name field and store it in a variable called firstThreeLetter

    let randomNumber = Date.now().toString()//we used the Date.now() method to get the current timestamp in milliseconds and convert it to a string using the toString() method and store it in a variable called randomNumber

    let emid = firstThreeLetter + randomNumber.slice(-3)//we used the slice method to get the last three digits of the randomNumber variable and concatenate it with the firstThreeLetter variable to create a unique employeeId and store it in a variable called emid

    console.log(firstThreeLetter);
    
    
    const profile = new Profile({
        employeeId : emid,
        designation : designation,
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

let getProfile = async (req,res) => {
    
    let data = await Profile.find({})//for getting all the profiles from the database and store it in a variable called data 

    res.status(200).json({
        success : true,
        message : "all profile data",
        data : data
    })
}

let getSingleProfile = async (req,res) => {
    let { id } = req.params//for getting the profile id from the request parameters

    let data = await Profile.findOne({_id : id}) //for getting a single profile from the database by matching the id from the request parameters with the _id field in the daatabase and store it in a variable called data

    res.status(200).json({
        success : true,
        message : `${data.name} profile data`,
        data : data    
    })//we used templete literals to send the name of the profile in the response message and send the peofile data in the response body to the frontend


    console.log(data);
    
}

let updateProfile = async (req,res) => {
    let { id} = req.params// for getting the profile id from the request parameters

    let data = await Profile.findByIdAndUpdate({_id : id}, req.body, {new : true})//for updating a single profile in the database by matching the id from the request parameters with the _id field in the database and updating the profile with the data recived from the frontend in the request body and return the updated profile data and store it in a variable called data

    res.status(200).json({
        success : true,
        message : "update successfull",
        data : data
    })
}

let holdProfile = async (req,res) => {
    let { id} = req.body //for getting the profile id from the request body

    let existingUser = await Profile.findOne({_id : id})//for checking if the profile with the same id already exists in the database

    existingUser.isHold = true; //for updating the isHold field of the profile to true in the databse for holding the profile
    existingUser.save() // for saving the updated profile to the database

    res.send("profile hold successfully")
}

let getHoldProfile = async (req,res) => {
    let data = await Profile.find({isHold : {$eq:true}})//for getting all the profiles from the database where the isHold field is equal to true and store it in a variable called data

    res.send(data)//for sending the data of the hold profiles to the frontend in the response body
}//we used the $eq operator to check if the isHold field is equal to true in the database and get all the profiles that are on hold and send it to the frontend in the response body

module.exports = { profileCreateController, getProfile, getSingleProfile, updateProfile,holdProfile, getHoldProfile }