require("node:dns/promises").setServers (["1.1.1.1", "8.8.8.8"]);

require('dotenv').config()
const express = require('express');

const dbConnection = require('./config/dbConnection');
const { registrationController, loginController, logOutController } = require('./controllers/authController');
const { profileCreateController } = require("./controllers/profileCreateController");
const app = express();

app.use(express.json());

dbConnection();

app.post('/registration', registrationController)
app.post('/login', loginController)
app.post('/logout', logOutController)

//profile creation route
app.post('/profilecreate', profileCreateController)

console.log(process.env.PORT);

const port = process.env.PORT || 8000;

app.listen(8000, () => {
    console.log(`server is running on port ${port}`);

})