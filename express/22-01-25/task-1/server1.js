const express = require("express")

const app = express()

const port = 3000

app.get("/",(req,res) => {
    res.send("Hello Good Morning")
})

app.use(express.json()) // call middleware for post method
 

app.post("/port" ,(req,res) => {
    const {id , name,email} = req.body;
    res.send("data send")
    console.log("data send")
})


app.listen(port , () => {
    console.log("My port is running");
})

