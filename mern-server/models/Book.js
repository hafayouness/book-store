const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    bookTitle: {
      type: String,
      required: true,
    },

    authorName: {
      type: String,
    },

    imageURL: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    bookDescription: {
      type: String,
    },

    bookPDFURL: {
      type: String,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Book", BookSchema);
