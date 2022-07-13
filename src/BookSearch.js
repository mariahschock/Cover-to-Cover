import React from 'react';
import { useState, useEffect } from 'react';
import { getBooks } from './services/fetch-utils';

export default function BookSearch() {
  const [books, setBooks] = useState([]);
  const [bookQuery, setBookQuery] = useState([]);

  async function fetchBooks() {
    const data = await getBooks(bookQuery);

    setBooks(data.books);
  }

  useEffect(() => {
    fetchBooks();
  }, []); //eslint-disable-line

  async function handleSubmit(e) {
    e.preventDefault();

    await fetchBooks();

    setBookQuery('');
  }

  return (
    <div className="book-list">
      <form onSubmit={handleSubmit}>
        <input onChange={e => setBookQuery(e.target.value)} />
        <button>Search</button>
      </form>
      {
        books.map((book, i) => <div className="book" key={book.title + i} >
          <h2>{book.title}</h2>
          <img src={book.book_image} />
        </div>)
      }
    </div>
  );
}
