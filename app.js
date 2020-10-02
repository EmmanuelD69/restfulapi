/* loading packages we will use in this project */
const express = require("express");

/* variable to execute express package */
const app = express();

/* Routes */
app.get("/", (req, res) => {
  res.send("we are on homepage!");
});

/* Server settings */
app.listen(3000, () => console.log("Server is up and running!"));
