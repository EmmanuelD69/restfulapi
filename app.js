/* loading packages we will use in this project */
const express = require("express");
const mongoose = require("mongoose");

/* variable to execute express package */
const app = express();

/* Routes */
app.get("/", (req, res) => {
  res.send("we are on homepage!");
});

/* connecting to DB */
mongoose.connect(
  "mongodb+srv://EmmanuelDev:testdb@emmanueldevdb0.ztbcz.mongodb.net/EmmanuelDevDB0?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to the database!")
);
/* Server settings */
app.listen(3000, () => console.log("Server is up and running!"));
