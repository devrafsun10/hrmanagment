const mongoose = require('mongoose');
const { Schema} = mongoose;

const profileSchema = new Schema({
    // employeeId : {
    //     type: String,
    //     required: true
    // },
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
    }

})

module.exports = mongoose.model("Profile", profileSchema)//for exporting the profile model to be used in other files