const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
app.use(express.static("my-app/build"));
const bodyParser = require("body-parser");
const { profile } = require("console");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Listening on port 3000");
});

/**
 * Retrieve profile data from mongo
 */
app.get("/profile/:uid", (req, res) => {
  let user = req.params.uid;
  console.log("Retrieving " + user + " profile");
  async function retrieveProfile() {
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
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
app.post("/profile/:uid", async (req, res) => {
  let user = req.params.uid;
  console.log("Retrieving " + user + " profile");

  async function createProfile() {
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
      await client.connect();
      const collection = client.db("Museo").collection("users");

      const newProfile = {
        uid: user,
        username: req.body.username || "",
        email: req.body.email || "",
        dateJoined: req.body.dateJoined || "",
        visitedMuseums: req.body.visitedMuseums || [],
        savedMuseums: req.body.savedMuseums || [],
        friends: req.body.friends || [],
        profileBio: req.body.profileBio || "Empty bio",
        profilePic: req.body.profilePic || ""
      };

      const ret = await collection.insertOne(newProfile);
      res.send(ret);
    } catch (error) {
      console.error("Error creating profile:", error);
      res.status(500).send({ error: "Internal Server Error" });
    } finally {
      // await client.close();
    }
  }
  createProfile();
});


/**
 * Update user profile info in mongo
 */
app.put("/profile/:uid", async (req, res) => {
  try {
    const { MongoClient } = require("mongodb");
    const uri = process.env.MONGODB;
    const client = new MongoClient(uri);
    await client.connect();
    const collection = client.db("Museo").collection("users");
    const updateFields = {};
    for (const key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        updateFields[key] = req.body[key];
      }
    }
    const result = await collection.updateOne(
      { uid: req.params.uid },
      {
        $set: updateFields,
      }
    );
    if (result.matchedCount === 0) {
      return res
        .status(404)
        .send({ message: "No document found with the given id" });
    }
    res.status(200).send({ message: "Document updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

/**
 * Create new stamp entry in users stamp collection
 */
app.post("/museum/:uid", (req, res) => {
  let user = req.params.uid;
  console.log("Retrieving " + user + " profile");

  async function createStamp() {
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
      await client.connect;
      const database = client.db("Museo").collection(user);

      const verification = client.db("Museo").collection("verificationCodes");
      let code = await verification.findOne({
        museumName: req.body.museumName
      });

      code = code.verificationCode;
      // console.log(code);
      if (code === parseInt(req.body.verification)) {
        const newArticle = {
          museumName: req.body.museumName,
          dateVisited: req.body.dateVisited,
          notes: req.body.notes,
          notesPublic: req.body.notesPublic,
          stampPublic: req.body.stampPublic,
          left: req.body.left,
          top: req.body.top,
        };

        // add museum to list of saved museums under user id 
        const usersDB = client.db("Museo").collection("users");
        let saved = await usersDB.findOne({ uid: user});
        if (!saved.savedMuseums) {
          saved.savedMuseums = [];
        }
        saved = saved.savedMuseums;
        saved.push(req.body.museumName);
        await usersDB.updateOne(
          { uid: user},
          { $set: { savedMuseums : saved } },
          { upsert: true });


        const ret = await database.insertOne(newArticle);
        res.send(ret);
      } else {
        console.error("Invalid verification code");
      }
    } catch (error) {
      console.error("Error getting article:", error);
    } finally {
      // await client.close();
    }
  }
  createStamp();
});

/**
 * Retrieve stamp info
 */
app.get("/museum/:uid", (req, res) => {
  let user = req.params.uid;
  console.log("Retrieving " + user + " profile");
  async function retrieveProfile() {
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
      await client.connect;
      const database = client.db("Museo").collection(user);

      // const ret = await database.findOne({ museumName : req.body.museumName});
      const ret = await database.find().toArray();
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
 * Retrieve museum names from verification Codes db 
 */
app.get("/museums", (req, res) => {
  async function retrieveProfile() {
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
      await client.connect;
      const database = client.db("Museo").collection(verificationCodes);
      ret = [];
      const codesIterator = database.find();
      while (await codesIterator.hasNext()) {
        temp = await codesIterator.next();
        ret.push(temp["museumName"]);
      }
     
      res.send(ret);
    } catch (error) {
      console.error("Error getting profile:", error);
    } finally {
      // await client.close();
    }
  }
  retrieveProfile();
});

app.post("/collection/:uid", (req, res) => {
  const uid = req.params.uid;
  async function createCollection() {
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
      await client.connect;

      const database = client.db("Museo");
      await database.createCollection(uid);
      res.send();
      // await database.createCollection(uid);
    } catch (error) {
      console.error("Error getting profile:", error);
    } finally {
      // await client.close();
    }
  }
  createCollection();
});

app.get("/user/:uid", (req, res) => {
  let user = req.params.uid;
  async function retrieveProfile() {
    try {
      const { MongoClient } = require("mongodb");
      const uri = process.env.MONGODB;
      const client = new MongoClient(uri);
      await client.connect;
      const database = client.db("Museo").collection(user);
      // return all documents in the collection
      const ret = await database.find().toArray();
      res.send(ret);
    } catch (error) {
      console.error("Error getting profile:", error);
    } finally {
      // await client.close();
    }
  }
  retrieveProfile();
});
