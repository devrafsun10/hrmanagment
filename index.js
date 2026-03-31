require('dotenv').config()
const express = require('express');

const dbConnection = require('./config/dbConnection');
const { registrationController } = require('./controllers/authController');
const app = express();

app.use(express.json());

dbConnection();

app.post('/registration', registrationController)

console.log(process.env.PORT);

const port = process.env.PORT || 8000;

app.listen(8000, () => {
    console.log(`server is running on port ${port}`);

})