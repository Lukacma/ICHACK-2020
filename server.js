const express = require("express");
const path = require("path");
const app = express();
const port = "8000";

const MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb+srv://user:user@cluster0-olv9l.mongodb.net/test?retryWrites=true&w=majority", function (err, db) {

    if (err) throw err;
    var dbo = db.db("db");
    var query = { taken: true };
    dbo.collection("col").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
})

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});


app.listen(port, '0.0.0.0', () => {
    console.log(`Listening to requests on ${port}`);
});


