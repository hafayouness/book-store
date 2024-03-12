import { Label, TextInput, Textarea, Button } from "flowbite-react";
import React, { useState } from "react";

const UploadBooks = () => {
  const bookCategories = [
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
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    setSlectedBooksCategory(event.target.value);
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-center">Upload A book </h2>
      <form className="flex lg:w-[960px] flex-col flex-wrap gap-4">
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
              placeholder="Book name"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
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
          />
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBooks;
