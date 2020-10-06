/* Package to be used */
const mongoose = require("mongoose");

/* models for data to be posted to database */
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

/* Exporting module */
module.exports = mongoose.model("posts", PostSchema);
