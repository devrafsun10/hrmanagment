const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "username is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true, //Remove extra spaces from the email
        lowercase: true, //convert email to Lowercase
        unique: true, //ensure email is unique in the database
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill a valid email address'],//validate email format using regex
    },
    password: {
        type: String,
        required: [true, "password is required"],
        min: [5, "password must be at least 5 characters long"],//validate password length
        max: [8, "password must be at most 8 characters long"],//validate password length
        // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'Please fill a valid password'],//validate password format using regex (at least one digit, one lowercase leeter, one uppercase letter and one special character)
    },

    photo: {
        type: String,
    },
    // nid: {
    //     type: Number,
    //     min: [10, "NID must be at least 10 characters long"],//validate NiD length
    //     max: [17, "NID must be at most 17 character long"],//validate nid length
    //     unique: true, //ensure nid is unique in the database
    // },
    address: {
        type: String,
    }
})

module.exports = mongoose.model("User", userSchema);