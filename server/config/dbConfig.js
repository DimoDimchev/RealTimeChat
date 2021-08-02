const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/chat";

// connect to db
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to db");
});
