/* Package to be used */
const express = require("express");

/* Packages functionnalities to be used */
const router = express.Router();

/* Routes */
router.get("/", (req, res) => {
  res.send("we are on homepage!");
});

/* Exporting module */
module.exports = router;
