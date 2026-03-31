const mongoose = require('mongoose');

let dbConnection = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
    console.log("connect to mongodb");

})
}

module.exports = dbConnection;