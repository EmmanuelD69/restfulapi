/* Package to be used */
const express = require("express");

/* Modules imports*/
const Post = require("../models/post");

/* Packages functionnalities to be used */
const router = express.Router();

/* GET Routes - What the server is sending us */
router.get("/", (req, res) => {
  res.send("we are on posts page!");
});

router.get("/test", (req, res) => {
  res.send("we are on posts test page!");
});

/* POST Routes - What we are sending to the server */
router.post("/", (req, res) => {
  /* based on our model, a new Post will be created */
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  /* saving the data to the mongoDB database */
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

/* Exporting module */
module.exports = router;
