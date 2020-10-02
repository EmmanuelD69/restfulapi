const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("we are on posts page!");
});

router.get("/test", (req, res) => {
  res.send("we are on posts test page!");
});

module.exports = router;
