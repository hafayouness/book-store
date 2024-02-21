const express = require("express");
const {
  CreateBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getCategoryBook,
} = require("../controller/BookController.js");

const router = express.Router();

router.get("/", getAllBooks);
router.post("/upload-book", CreateBook);
router.get("/category/:category", getCategoryBook);
router.delete("/:id", deleteBook);
router.patch("/:id", updateBook);

module.exports = router;
