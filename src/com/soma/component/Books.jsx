import React from "react";
import book from "../../../content/book.png";
import "./../css/Books.css";

function Books() {
  return (
    <section className="book-component">
      <ComponentHeader className="component-header" />
      <section className="books-store">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </section>
  );
}
const ComponentHeader = () => <h1>Mahii Book Store</h1>;
const Title = () => <h3>My Book</h3>;
const Author = () => <p>by Author</p>;
const BookImage = () => (
  <img width="200" height="100" src={book} alt="myMook" />
);

const Book = () => {
  return (
    <div className="book">
      <BookImage />
      <Title />
      <Author />
    </div>
  );
};

export default Books;
