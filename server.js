const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
var ObjectID = require('mongodb').ObjectID;

const port = "8000";
var counter = 0;

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://user:user@cluster0-olv9l.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url);
var MongoDatabase;
app.use(bodyParser.json());
app.use(cors());


// Connect to the db
client.connect(function (err, db) {

    if (err) throw err;
    MongoDatabase = client.db("db");
    app.listen(port, '0.0.0.0', () => {
        // console.log(`Listening to requests on ${port}`);
    });

})
app.post("/:channel/newUser", (req, res) => {
    // console.log(req.body)
    AddNewUser(MongoDatabase, req.params.channel, req.body).then(result => {
        res.status(200).send({ "_id": result.toString() });
    })
})
app.route("/:channel/list").get((req, res) => {
    GetChannelUsers(req.params.channel, MongoDatabase, JSON.parse(req.query.myID)._id).then(result => {
        res.status(200).send(result);
    });

});
app.post("/channel/create/:channelName", (req, res) => {
    makecollections(req.params.channelName, MongoDatabase);
    res.status(200).send({ "link": "https://awesomeapp.localtunnel.me/" + req.params.channelName + "/invite" });
})
app.post("/:channel/:userID/update_bio", (req, res) => {
    const new_profile = req.body;
    // console.log(req.body);
    UpdateBio(req.params.userID, new_profile, MongoDatabase, req.params.channel);
})

app.get("/:channel/:userID/update_bio", (req, res) => {


    GetProfile(req.params.userID, MongoDatabase, req.params.channel).then(result => {
        // console.log("request received", result);
        res.status(200).send(result);
    })
})

app.get("/:channel/match", (req, res) => {
    const user = JSON.parse(req.query.myID);
    // console.log("user: ", user._id);
    const match = req.query.theirID;
    // console.log("received ", match);
    findgroupid(user._id, req.params.channel, MongoDatabase).then(result => {
        // console.log("result: ", result);
        match_found(match, result, req.params.channel, MongoDatabase).then(res => {
            if (res == false) {
                console.log("not_matched");
                UpdateMatchedWith(result, match, req.params.channel, MongoDatabase);
            }
            else {
                console.log("matched");
                res.status(200).send(res);
            }
        }
        )
    })
})

app.get("/:channel/login", (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    // console.log("receive ", lastname)
    // console.log("request received")
    login(firstname, lastname, req.params.channel, MongoDatabase).then(result => {
        // console.log(result)
        if (result != false) {
            res.status(200).send({ "_id": result.toString() });
        }
        else {
            res.status(200).send({ "_id": "" });
            console.log("Not logged in");
        }
    })
})

function makecollections(channelName, db) {
    db.createCollection(channelName, function (err, res) {
        if (err) throw err;
    });

    db.createCollection(channelName + "_users", function (err, res) {
        if (err) throw err;
    });
}

function login(firstname, lastname, channel, db) {
    return new Promise(function (resolve, reject) {
        // console.log("lastname ", lastname)
        db.collection(channel + "_users").find({ $and: [{ "firstname": firstname }, { "surname": lastname }] })
            .toArray((err, result) => {
                // console.log("result: ", result)
                if (result.length != 0) {
                    resolve(result[0]._id);
                }
                else {
                    resolve(false);
                }
            })
    })
}
function mapToResult(result, user, user_id, channel) {
    var bad_index = [];
    for (k = 0; k < user.length; k++) {
        for (i = 0; i < result.length; ++i) {
            for (j = 0; j < result[i].userID.length; ++j) {
                console.log(result[i].matchedID);
                console.log(user_id);
                findgroupid(user_id, channel, MongoDatabase).then(res => {
                    if (result[i].matchedID.includes(res)) {
                        bad_index.push(i);
                    }
                })
                if (result[i].userID[j].toString() === user[k]._id.toString()) {

                    if (result[i].userID[j] == user_id) {
                        bad_index.push(i);
                    }
                    result[i].userID[j] = user[k];
                }
            }
        }
    }
    for (var i = 0; i < bad_index.length; i++) {
        console.log(bad_index[i]);
        result.splice(bad_index[i], 1);
    }
    return result;
}

function GetProfile(userID, db, channelName) {
    userID = ObjectID(userID);
    return new Promise(function (resolve, reject) {
        db.collection(channelName + "_users").find({ "_id": userID }).toArray((err, result) => {
            resolve(result[0]);
        })
    })
}

function UpdateBio(userID, new_profile, db, channelName) {
    var NewuserID = ObjectID(userID);
    new_profile._id = NewuserID;
    // console.log(NewuserID);
    db.collection(channelName + "_users").replaceOne(
        { "_id": NewuserID }, { $set: new_profile }
    );
}

async function GetChannelUsers(channelName, db, user_id) {

    return new Promise(function (resolve, reject) {
        const cursor = db.collection(channelName).find({});
        cursor.toArray(function (err, result) {
            var newArray = [];
            for (result_i = 0; result_i < result.length; ++result_i) {
                for (user_i = 0; user_i < result[result_i].userID.length; ++user_i) {
                    newArray.push(result[result_i].userID[user_i]);


                }
            }
            db.collection(channelName + "_users")
                .find({ "_id": { $in: newArray } }).toArray(
                    function (err, res) {
                        // console.log(res);
                        result = Object.assign(mapToResult(result, res, user_id, channelName));
                        resolve(result);
                    }
                );

        })
    })
}

async function AddNewUser(db, channelName, data) {
    return new Promise((resolve, reject) => {
        db.collection(channelName + "_users").insertOne(data, (err, result) => {
            // console.log(result);
            var groupObject = { "matchedID": [], "userID": [result[0]._id] };
            db.collection(channelName).insertOne(groupObject);
            return resolve(result[0]._id);
        })
    })
}

function UpdateMatchedWith(group, group_matched_with, channelName, db) {
    const cursor = db.collection(channelName).find({ "_id": group }).project({ "matchedID": 1 });
    cursor.toArray((err, result) => {
        // console.log(result);
        db.collection(channelName).update({ "_id": group }, { $push: { "matchedID": group_matched_with } });

    });

}

async function findgroupid(userID, channelName, db) {
    return new Promise(function (resolve, reject) {
        db.collection(channelName).find({}).project({ "_id": 1, "userID": 1 }).toArray((err, result) => {
            // console.log(userID);

            for (i = 0; i < result.length; i++) {
                for (j = 0; j < result[i].userID.length; j++) {
                    if (userID == result[i].userID[j].toString()) {
                        // console.log(result);
                        return resolve(result[i]._id);
                    }
                }
            }

        });
    })
}


async function match_found(user, user_matched_with, channelName, db) {
    //console.log("print text looooooool");
    return new Promise(function (resolve, reject) {
        // console.log(channelName);
        db.collection(channelName).find({ "_id": ObjectID(user) }).project({ "matchedID": 1 }).toArray((err, result) => {
            console.log(result[0])
            for (i = 0; i < result[0].matchedID.length; i++) {
                // console.log("gets here2");

                if (result[0].matchedID[i] == user_matched_with) {

                    var user_cursor = db.collection(channelName).find({ "_id": { $in: [user_matched_with, user] } }).project({ "userID": 1 }).toArray((err, res) => {

                        // console.log("res: ", res);
                        var temp_list = [];

                        for (k = 0; k < res.length; k++) {
                            for (j = 0; j < res[k].userID.length; j++) {
                                temp_list.push(res[k].userID[j]);
                            }
                        }

                        var myq1 = { "_id": user };
                        var myq2 = { "_id": user_matched_with };

                        db.collection(channelName).remove(myq1, function (err, res) {
                            if (err) throw err;
                            //console.log(res);

                        });
                        db.collection(channelName).remove(myq2, function (err, res) {
                            if (err) throw err;
                            //console.log(res);

                        });

                        var entry = { "_id": ObjectID(user.toString()), "matchedID": [], "userID": temp_list };
                        db.collection(channelName).insertOne(entry, function (err, res) {
                            if (err) throw err;
                            //console.log(res);

                        });

                        db.collection(channelName + "_users").find({ "_id": { $in: result[0].userID } }).toArray(
                            (err, res) => {
                                result[0].userID = res;

                                return resolve(result);
                            }
                        )

                    });

                }
            }
            return resolve(false);


        });
    })
}