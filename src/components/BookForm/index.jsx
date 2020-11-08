import React, { useContext, useState } from "react";
import { BookContext } from "./../../contexts/BookContext";
import { ADD_BOOK } from "./../../contexts/BookContext/constants";
const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_BOOK, book: { title, auther } });
    setTitle("");
    setAuther("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Book auther"
        value={auther}
        onChange={(e) => setAuther(e.target.value)}
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
