const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./config/dbConfig");

const Room = require("./models/room");

const validateForm = require("./middlewares/validateFormMiddleware");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  Room.find({}, (err, rooms) => {
    if (err) return console.log(err);
    res.json(rooms);
  });
});

// create a new room
app.post("/rooms", validateForm, (req, res) => {
  let roomName = req.body["roomName"];
  let generatedRoom = new Room({ name: roomName });

  generatedRoom.save((err, res) => {
    if (err) return console.log(err);
    console.log(res);
  });

  res.status(201);
  res.end();
});

server.listen(5000, () => {
  console.log("Initialized");
});
