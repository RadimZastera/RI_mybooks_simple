import React from 'react';
import BookShelve from "../components/BookShelve/BookShelve";
import {Link} from "react-router-dom";

class ShelveListPage extends React.Component {

    filterBooksByShelve = (shelve) => {
        return this.props.books.filter((book, index) => {
            return book.shelf === shelve;
        })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.shelves.filter((shelve) => {
                            return shelve.code !== "None"
                        }).map((shelve, index) => {
                            return <BookShelve shelves={this.props.shelves} shelveChangeHandler={this.props.changeShelveEventHandler} key={shelve.code}
                                               books={this.filterBooksByShelve(shelve.code)}
                                               shelve={shelve}/>
                        })}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ShelveListPage;


