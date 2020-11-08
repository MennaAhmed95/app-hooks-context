import React, { useContext } from "react";
import BookDetails from "../BookDetails";
import { BookContext } from "./../../contexts/BookContext";
const BookList = (props) => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((item) => (
          <BookDetails book={item} key={item.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">
      There is no books to resd .Enjoy with your free time.
    </div>
  );
};

export default BookList;
