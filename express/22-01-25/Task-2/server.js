const express = require("express")
const mongoose = require("mongoose")

const app = express()

const port = 5555

app.use(express.json()) // call middleware 

const url = 'mongodb://localhost:27017/ExpressDB';

mongoose.connect(url)

.then(() => {
    console.log("Connect ot DB")
})

const userSchema = new mongoose.Schema({
    name:String,
    rollNo:Number,
    email:String,
    password:String
})

const userModel = mongoose.model("users" , userSchema)

app.post("/users" ,(req,res) => {
    const  users = new userModel
    ({
        name: req.body.name,
        rollNo: req.body.rollNo,
        eamil: req.body.email,
        password: req.body.password
    })
    users
        .save()
        .then(() => {
            console.log("User Added");
            res.send("User Adde")
        })
        .catch(() => {console.log("error");
        })

})



app.listen(port , () => {
    console.log("My port is running");
})

