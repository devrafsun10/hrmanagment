require("node:dns/promises").setServers (["1.1.1.1", "8.8.8.8"]);

require('dotenv').config()
const express = require('express');

const dbConnection = require('./config/dbConnection');
const { registrationController, loginController } = require('./controllers/authController');
const app = express();

app.use(express.json());

dbConnection();

app.post('/registration', registrationController)
app.post('/login', loginController)

console.log(process.env.PORT);

const port = process.env.PORT || 8000;

app.listen(8000, () => {
    console.log(`server is running on port ${port}`);

})