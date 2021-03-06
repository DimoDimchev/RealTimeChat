const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./config/dbConfig");

const Room = require("./models/room");
const Message = require("./models/message");

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
  });

  res.status(201);
  res.end();
});

io.on("connection", (socket) => {
  socket.on("joinRoom", (data) => {
    Message.find({ room: data }).then((result) => {
      socket.emit("output-messages", result);
    });
  });

  socket.on("message", (data) => {
    let author = data.author;
    let message = data.message;
    let id = data.room;

    Room.findOne({ _id: id }).then((room) => {
      let generatedMessage = new Message({ author, message, room });
      generatedMessage.save((err, res) => {
        if (err) return console.log(err);
      });
      io.emit("message", generatedMessage);
    });
  });
});

server.listen(5000, () => {
  console.log("Initialized");
});
