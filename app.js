/* loading packages we will use in this project */
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
/* variable to execute express package */
const app = express();

/* Importing Routes */
const homeRoute = require("./routes/home");
const postsRoute = require("./routes/posts");

/* middleware = everytime we reach the destination a function will run */
app.use("/", homeRoute);
app.use("/posts", postsRoute);

/* connecting to DB */
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to the database!")
);
/* Server settings */
app.listen(3000, () => console.log("Server is up and running!"));
