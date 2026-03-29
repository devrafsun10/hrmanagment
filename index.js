require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://mern2408:hrmanagment@cluster0.qxv1zbq.mongodb.net/hrmanagment?appName=Cluster0').then(() => {
    console.log("connect to mongodb");

})

app.get('/', (req, res) => {
    res.send("hello world");
})

console.log(process.env.PORT);

const port = process.env.PORT || 8000;

app.listen(8000, () => {
    console.log(`server is running on port ${port}`);

})