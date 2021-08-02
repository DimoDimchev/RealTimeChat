const express = require("express");
const bodyParser = require("body-parser");
require("./config/dbConfig");

const Room = require("./models/room");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  Room.find({}, (err, rooms) => {
    if (err) return console.log(err);
    res.json(rooms);
  });
});

// create a new room
app.post("/rooms", (req, res) => {
  let roomName = req.body["roomName"];
  let generatedRoom = new Room({ name: roomName });

  generatedRoom.save((err, res) => {
    if (err) return console.log(err);
    console.log(res);
  });

  res.status(201);
  res.end();
});

app.listen(5000, () => {
  console.log("Initialized");
});
