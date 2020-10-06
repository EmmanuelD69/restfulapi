/* Package to be used */
const express = require("express");

/* Modules imports*/
const Post = require("../models/post");

/* Packages functionnalities to be used */
const router = express.Router();

/* GET Routes - What the server is sending us */
/* GET BACK ALL THE POSTS */
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/test", (req, res) => {
  res.send("we are on posts test page!");
});

/* GETTING BACK A SPECIFIC POST */
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

/* POST Routes - What we are sending to the server */
/* SUBMITS A POST */
router.post("/", async (req, res) => {
  /* based on our model, a new Post will be created */
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  /* saving the data to the mongoDB database */
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch {
    res.json({ message: err });
  }
});

/* DELETING A Post */
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

/* Exporting module */
module.exports = router;
