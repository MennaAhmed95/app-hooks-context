import React, { useContext } from "react";
import { REMOVE_BOOK } from "../../contexts/BookContext/constants";
import { BookContext } from "./../../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: REMOVE_BOOK, id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="auther">{book.auther}</div>
    </li>
  );
};

export default BookDetails;
