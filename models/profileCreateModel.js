const mongoose = require('mongoose');
const { Schema} = mongoose;

const profileSchema = new Schema({
    employeeId : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true,
        trim: true,//to remove whitespace from the beginning and end of the email string
    },
    name : {
        type: String,
        required : true
    },
    phoneNumber : {
        type: String,
        required : true
    },
    bloodGroup: {
        type: String,
    },
    gender : {
        type: String,
        enum : ["male","female","coustom"],//enum is used to specify the allowed values for the gender field
        required : true
    },

    dob : {
        type: String,
        required : true,
    },
    designation: {
        type: String,
        required: true,
        trim: true,//to remove whitespace from the beginning and end of the degignation string
        enum: [
            "Software Engineer",
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
            "HR",
            "Manager",
            "Intern"
        ]
    }

})

module.exports = mongoose.model("Profile", profileSchema)//for exporting the profile model to be used in other files