import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { data } = useLoaderData();
  console.log(useLoaderData());
  console.log(data);
  console.log(data._id);
  return (
    <div className="mt-28 p-4 lg:px-24">
      <img src={data.imageURL} className="h-96" />
      <p>{data.bookTitle}</p>
    </div>
  );
};
// mt-28 p-4 lg:px-24
// h-96
export default SingleBook;
