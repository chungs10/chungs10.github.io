const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
app.use(express.static("my-app/build"));

app.listen(port, () => {
  console.log("Listening on port 3000");
});

/**
 * Retrieve profile data from mongo
 */
app.get("/profile/:uid", (req, res) => {

  let user = req.params.uid;
  console.log("Retrieving " + user + " profile");
  async function retrieveProfile(){
  try {
    console.log("debug point 0");
    const { MongoClient } = require("mongodb");
    console.log("debug point 0.5");
    // const uri = `mongodb+srv://sciencerollers0q:WJ64ZvdFdgz7L9dw@cluster0.guyeiya.mongodb.net`;
    
    const uri = process.env.MONGODB;
    console.log(uri);
    console.log("debug point 0.75");
    const client = new MongoClient(uri);
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("debug point1");
    await client.connect;
    const database = client.db("Museo").collection("users");

    const ret = await database.findOne({ uid: user });
    res.send(ret);

    } catch (error) {
      console.error("Error getting profile:", error);
    } finally {
      // await client.close();
    }
  }
  retrieveProfile();
});

/**
 * Create blank user profile in mongo for new user
 */
app.post("/profile", (req, res) => {
  let user = req.body.uid;
  console.log("Retrieving " + user + " profile");

  async function createProfile(){
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
      await client.connect;
      const database = client.db("Museo").collection("users");
      
      const newArticle = { 
       uid: user,
       username: "",
       email: "",
       dateJoined: "",
        visitedMuseums: [],
        savedMuseums: [],
        friends: [],
        profileBio: "Empty bio"
      };

      const ret = await database.insertOne(newArticle);
      res.send(ret);

      } catch (error) {
        console.error("Error getting article:", error);
      } finally {
        // await client.close();
      }
    }
    createProfile();

});

/**
 * Update user profile info in mongo
 */
app.put('/db/:uid, async (req, res) => {
  try {
      const collection = client.db().collection('users');
          // only update the fields that are provided in the request body
    const updateFields = {};
    for (const key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        updateFields[key] = req.body[key];
      }
    }
    const result = await collection.updateOne({ uid: 
      $set: updateFields
    });
      if (result.matchedCount === 0) {
          return res.status(404).send({ message: 'No document found with the given id' });
      }
      res.status(200).send({ message: 'Document updated successfully' });
  } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Internal Server Error' });
  }
});

