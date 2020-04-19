import React from 'react';
import book from '../../../content/book.png'

function Books() {
    return (
        <section>
            <Book />
            <Book />
        </section>
    )
};

const Title = () => <h1>My Book</h1>;
const Author = () => <p>by Author</p>;
const BookImage = () => <img width="200" height="100" src={book}   />;

const Book = () => {
    return (
        <article>
            <BookImage />
            <Title/>
            <Author/>
        </article>
    )
};

export default Books;
