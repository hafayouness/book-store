import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
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

  return (
    <div>
      <BookCards
        books={books[2] && books[2].slice(2, 10)}
        headline="Others Books"
      />
    </div>
  );
};

export default OtherBooks;
