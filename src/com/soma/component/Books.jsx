import React from 'react';
import book from '../../../content/book.png'
import './../css/Books.css'

function Books() {
    return (
        <>
            <Book />
            <Book />
            <Book />
        </>
    )
};

const Title = () => <h1>My Book</h1>;
const Author = () => <p>by Author</p>;
const BookImage = () => <img width="200" height="100" src={book} alt="monkey-donkey"/>;

const Book = () => {
    return (
        <div className="bookComponent">
            <BookImage />
            <Title/>
            <Author/>
        </div>
    )
};

export default Books;
