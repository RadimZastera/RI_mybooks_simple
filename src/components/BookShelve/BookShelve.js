import React from 'react';

import Book from './Book/Book'

const bookShelve = (props) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelve.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book, index) => {
                        return <li key={'li'+book.id}><Book shelves={props.shelves} shelveCode={props.shelve.code} shelveChangeHandler={props.shelveChangeHandler} key={book.id} book={book}/></li>
                    })}
                </ol>
            </div>
        </div>
    )
};
export default bookShelve;
