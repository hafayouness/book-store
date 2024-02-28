const Book = require("../models/Book.js");

// Route pour ajouter un nouveau livre

const CreateBook = async (req, res) => {
  try {
    // Créer une nouvelle instance du modèle de livre avec les données du corps de la requête
    const newBook = new Book(req.body);

    // Enregistrer le nouveau livre dans la base de données
    const savedBook = await newBook.save();

    res.status(201).json({
      success: true,
      message: "Successfully created",
      data: savedBook,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
      error: err.message,
    });
  }
};

// Route pour récupérer tous les livres
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});

    res.status(200).json({
      success: true,
      message: "succesfully getting all",
      data: allBooks,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not fund",
      error: err.message,
    });
  }
};
// Route pour récupérer  un livre
const getSingleBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ success: false, message: "Book not fund" });
    }

    res.status(200).json({
      success: true,
      message: "succesfully getting a single book",
      data: book,
    });
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch book",
      error: error.message,
    });
  }
};
// Route pour mettre à jour un livre existant
const updateBook = async (req, res) => {
  const id = req.params.id;
  try {
    const updateBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updateBook) {
      res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: updateBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
      error: err.message,
    });
  }
};

// Route pour supprimer un livre
const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({
      succes: true,
      message: "succesFully deleted",
    });
  } catch (err) {
    res.status(500).json({
      succes: false,
      message: "failed to deleted",
      error: err.message,
    });
  }
};
const getCategoryBook = async (req, res) => {
  try {
    const category = req.params.category;
    const books = await Book.find({ category: category });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  CreateBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getCategoryBook,
  getSingleBook,
};
