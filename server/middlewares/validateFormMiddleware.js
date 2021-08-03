const validateForm = (req, res, next) => {
  if (req.body["roomName"]) {
    if (!req.body["roomName"].replace(/\s/g, "").length) {
      res.status(403).send("You need to provide a room name");
    } else {
      console.log("added");
      next();
    }
  } else {
    res.status(403).send("You need to provide a room name");
  }
};

module.exports = validateForm;
