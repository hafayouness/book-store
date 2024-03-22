import { Label, TextInput, Textarea, Button } from "flowbite-react";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams();
  const { data } = useLoaderData();

  const bookCategories = [
    "Choose",
    "Fiction",
    "Non-Fiction",
    "Fantasy",
    "Mystery",
    "Programming",
    "Science Fiction",
    "History",
    "Autobiography",
    "Bibliography",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
    "Horror",
  ];

  const [selectedBooksCategory, setSlectedBooksCategory] = useState(
    bookCategories[data.category]
  );
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSlectedBooksCategory(event.target.value);
  };
  const HandleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const category = form.categoryName.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      bookDescription,
      bookPDFURL,
      category,
    };
    console.log(updateBookObj);

    // send to db
    // update book data
    fetch(`http://localhost:5000/api/v1/all-books/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert("Book ist updated SuccessFully");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-center">
        Update the book data
      </h2>
      <form
        className="flex lg:w-[960px] flex-col flex-wrap gap-4"
        onSubmit={HandleUpdate}
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              required
              defaultValue={data.bookTitle}
              placeholder="Book name"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              defaultValue={data.authorName}
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
              defaultValue={data.imageURL}
            />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBooksCategory}
              onChange={handleChangeSelectedValue}
              defaultValue={data.category}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            type="text"
            name="bookDescription"
            placeholder="write your book Description"
            required
            className="w-full"
            rows={6}
            defaultValue={data.bookDescription}
          />
        </div>

        {/* book pdn link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDFURL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="book pdf url"
            required
            shadow
            defaultValue={data.bookPDFURL}
          />
        </div>
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
