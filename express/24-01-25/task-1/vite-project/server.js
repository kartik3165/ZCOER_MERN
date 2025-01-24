import express from 'express'
import mongoose, { Schema } from 'mongoose'
import cors from 'cors'


//objects
const app = express()
const port = 4000

//middle ware
app.use(express.json())
app.use(cors())

//schema
const schema = new mongoose.Schema({
    username:String,
    password:String
})

const user = mongoose.model("user",schema)

app.post("/login",async(req,res)=>{
    mongoose.connect("mongodb://localhost:27017/24-01-25")
.then(()=>{
    console.log("connected to db")
})

    const{username,password}= req.body
    const newUser= new user(req.body)
    await newUser.save()
    res.send("Request received")

})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})