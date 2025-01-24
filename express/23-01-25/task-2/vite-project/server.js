import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

// 1. Create Express app
const app = express()

// 2. Enable CORS (Cross-Origin Resource Sharing)
app.use(cors())

// 3. Enable JSON body parsing
app.use(express.json());

// 4. Set server port
const port = 3165

// 5. MongoDB connection URL
const url = 'mongodb://localhost:27017/UserAuth';

// 6. Connect to MongoDB
mongoose.connect(url)
.then(()=>{
    console.log("DB is connected");  
})

// 7. Define user schema (data structure)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// 8. Create User model
const userModel = mongoose.model("users", userSchema)

// 9. Handle signup POST requests
app.post('/api/signup', (req,res)=> {
    // 10. Create new user from request body
    const users = new userModel({
        name: req.body.name,
        email: req.body.email, // Fixed typo
        password: req.body.password
    })
    
    // 11. Save to database
    users.save()
        .then(() => {
            res.send("User Added") // Success response
        })
        .catch((err) => {
            res.send("Error: " + err) // Error response
        })
})

// 12. Start server
app.listen(port, ()=> {
    console.log("Server running port 3165")
})