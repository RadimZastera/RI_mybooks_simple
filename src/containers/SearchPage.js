import React from 'react';
import {Link} from "react-router-dom";
import Book from "../components/BookShelve/Book/Book";

class SearchPage extends React.Component {

    render() {

        let booksOut = "";
        if (this.props.searchBooks && this.props.searchBooks.length > 0) {
            booksOut = this.props.searchBooks.map((book, index) => {
                return <li key={'li' + book.id}><Book shelves={this.props.shelves} shelveChangeHandler={this.props.changeShelveEventHandler} key={book.id} book={book}/></li>
            })
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                              NOTES: The search from BooksAPI is limited to a particular set of search terms.
                              You can find these search terms in SEARCH_TERMS.MD

                              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                              you don't find a specific author or title. Every search is limited by search terms.
                            */}
                        <input type="text" value={this.props.searchText} onChange={this.props.searchBooksHandler} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {booksOut}
                    </ol>

                </div>
            </div>
        )
    }
}

export default SearchPage;
