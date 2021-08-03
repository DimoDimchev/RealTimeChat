const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: String,
  author: String,
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
});

module.exports = mongoose.model("Message", messageSchema);
