import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/all-books")
      .then((res) => res.json())
      .then((data) => {
        // Convertir les données JSON en un tableau JavaScript
        const bookArray = Object.values(data);
        setBooks(bookArray);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <BookCards books={books[2]} headline="Best Seller Books" />
    </div>
  );
};

export default BestSellerBooks;
