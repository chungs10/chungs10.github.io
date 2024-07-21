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
app.get("/profile:uid", (req, res) => {
  // Get the user id from the request url
  let user = req.params.uid;
  console.log("Retrieving " + user + " profile");
  async function retrieveProfile(){
  try {
    const { MongoClient } = require("mongodb");
    const uri = process.env.MONGODB;
    const client = new MongoClient(uri);
    await client.connect;
    const database = client.db("Museo").collection("users");

    const ret = await database.findOne({ uid: user });
    res.send(ret);

    } catch (error) {
      console.error("Error getting article:", error);
    } finally {
      await client.close();
    }
  }
  retrieveProfile();
});
// WRITE ME an example call to this endpoint would be:
// fetch("/profile", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     uid: "1234567890",
//   }),
// })

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
        await client.close();
      }
    }
    createProfile();

});

/**
 * Update user profile info in mongo
 */
app.put("/profile/:user", (req, res) => {
  let user = req.body.uid;
  console.log("Retrieving " + user + " profile");

  // Determine which values are present in req.body
  const updateFields = {};
  for (const key in req.body) {
      if (req.body.hasOwnProperty(key)) {
          updateFields[key] = req.body[key];
      }
  }

  async function updateProfile(){
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
      await client.connect;
      const database = client.db("Museo").collection("users");
      
      const ret = await database.updateOne(
        { uid: user },
        { $set: updateFields }
      );

      res.send(ret);
  
      } catch (error) {
        console.error("Error getting article:", error);
      } finally {
        await client.close();
      }
    }
    updateProfile();

});

