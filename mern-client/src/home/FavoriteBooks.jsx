import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/all-books")
      .then((res) => res.json())
      .then((data) => {
        // Convertir les données JSON en un tableau JavaScript
        const bookArray = Object.values(data);
        setBooks(bookArray);
        console.log(bookArray);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);
  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/v1/all-books");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch books");
  //       }
  //       const data = await response.json();
  //       const bookArray = Object.values(data);
  //       setBooks(bookArray);
  //       console.log(bookArray);
  //     } catch (error) {
  //       console.error("Error fetching books:", error);
  //     }
  //   };

  //   fetchBooks();
  // }, []);

  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default FavoriteBooks;
