import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/all-books")
      .then((res) => res.json())
      .then((data) => {
        // Convertir les données JSON en un tableau JavaScript
        const bookArray = Object.values(data);
        setBooks(bookArray);
        console.log(bookArray);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are Here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {Array.isArray(books) && books.length > 0 ? (
          books[2].map((book) => (
            <Card key={book._id}>
              <img src={book.imageURL} alt="" />
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>
              <p className="italic text-orange-200 font-bold  dark:text-gray-400  text-center">
                {book.authorName}
              </p>
              <p className="italic text-slate-700 dark:text-gray-400  text-center">
                {book.category}
              </p>
              <button className="bg-blue-700 font-semibold  text-white py-2 rounded">
                {" "}
                Buy Now
              </button>
            </Card>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
