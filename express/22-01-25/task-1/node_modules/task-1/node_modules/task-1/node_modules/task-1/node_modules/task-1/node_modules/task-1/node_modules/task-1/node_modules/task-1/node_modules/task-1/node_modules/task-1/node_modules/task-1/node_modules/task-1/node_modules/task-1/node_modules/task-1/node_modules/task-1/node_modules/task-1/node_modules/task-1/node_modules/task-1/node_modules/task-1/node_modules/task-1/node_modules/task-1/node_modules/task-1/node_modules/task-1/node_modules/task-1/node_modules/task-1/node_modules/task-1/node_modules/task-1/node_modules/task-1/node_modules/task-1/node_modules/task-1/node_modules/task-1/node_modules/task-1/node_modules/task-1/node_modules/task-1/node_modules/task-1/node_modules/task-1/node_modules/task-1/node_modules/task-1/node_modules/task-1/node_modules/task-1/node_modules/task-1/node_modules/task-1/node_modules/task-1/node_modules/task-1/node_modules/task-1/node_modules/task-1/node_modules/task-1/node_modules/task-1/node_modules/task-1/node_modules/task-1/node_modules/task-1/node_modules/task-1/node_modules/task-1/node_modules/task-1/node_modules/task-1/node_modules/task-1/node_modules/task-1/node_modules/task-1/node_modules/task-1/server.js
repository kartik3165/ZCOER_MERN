const express = require("express")

const app = express()

app.use(express.json())

const port = 3165

app.get("/",(req,res) => {
    res.send("Hello Good Morning")
})

app.post("/port" ,(req,res) => {
    const [id , data] = req.body().    
})

app.listen(port , () => {
    console.log("My port is running");
    
})