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

// handle message POST to room
app.post("/rooms/:id", (req, res) => {
  let author = req.body["author"];
  let message = req.body["message"];

  Room.findOne({ _id: req.params.id }).then((room) => {
    let generatedMessage = new Message({ author, message, room });
    generatedMessage.save((err, res) => {
      if (err) return console.log(err);
    });
  });

  res.status(201);
  res.end();
});

app.get("/rooms/:id", (req, res) => {
  Message.find({ room: req.params.id }, (err, messages) => {
    if (err) return console.log(error);
    res.json(messages);
  });
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);
  });
});

server.listen(5000, () => {
  console.log("Initialized");
});
