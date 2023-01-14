
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require('dotenv');
const app = express();
const connect = require("./config/database")

dotenv.config();

const port = process.env.PORT ;
const uri = process.env.MONGO_URL;



const route = express.Router();
connect.connect();

const ashishRouter = require("./config/routes");
const userRouter = require("./src/routes/user_route");
const listenToGet = require("./config/server");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/ashish' , ashishRouter)
app.use('/user', userRouter)

// listenToGet()

app.get("/" , (req , res) => {
    console.log("inside get")
     res.send({
        "name": "Welcome to rajjjam dhulaai",
        "address" : "Imadol , Lalitpur"
     })
})

 

app.listen(port , ( ) => {
    console.log("Server started on port " + port);
});





