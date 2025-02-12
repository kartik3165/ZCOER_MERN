// imported file
const express = require("express")
const { MongoClient } = require('mongodb');
const fs = require('fs'); // Fixed import
const app = express()

// create middleware
const myMiddleWare = (req, res, next) => {
    const date = new Date();
    fs.appendFile("./log.txt", `This is today's date ${date}\n`, (err) => {
        if (err) {
            console.error(err);
        }
    });
    next(); // Call next() to proceed to the next middleware or route handler
};

// call middleware
app.use(myMiddleWare);
app.use(express.json());

// port number URL: "https://localhost:6969"
const port = 6969;

app.get("/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post("/search", async (req, res) => {
    const itemName = req.body.itemName;

    // Generated by MongoDB Compass
    const filter = { };
    const client = await MongoClient.connect(
        'mongodb://localhost:27017/'
    );
    const coll = client.db('coffee').collection('Coll3-MERN');
    const cursor = coll.find(filter);
    const result = await cursor.toArray();
    await client.close();
    res.send(result);
});

app.listen(port, () => {
    console.log("My port is running");
});
