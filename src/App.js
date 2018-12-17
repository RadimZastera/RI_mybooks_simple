import React from 'react'
import {Route, Switch} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import ShelveListPage from './containers/ShelveListPage'
import SearchPage from './containers/SearchPage'
import './App.css'

class BooksApp extends React.Component {
    state = {
        showSearchPage: false,
        books: [],
        searchBooks: [],
        searchText: "",
        shelves: [{title: "Currently Reading", code: "currentlyReading"}, {title: "Want to Read", code: "wantToRead"}, {title: "Read", code: "read"}, {title: "None", code: "None"}]
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({books}));
    }

    searchBooksHandler = (event) => {
        const value = event.target.value;
        const tmpState = {...this.state};
        tmpState.searchText = value;
        this.setState(tmpState);
        BooksAPI.search(value).then(searchBooks => this.setState({...this.state, searchBooks}));
    };


    changeShelveEventHandler = (bookId, event) => {
        let tmpState = {...this.state};
        const shelveName = event.target.value;
        const shelveExists = tmpState.shelves.find((shelve, index) => {
            return shelve.code === shelveName;
        });


        if (shelveExists) {
            let bookIndex = -1;
            let bookToChage = tmpState.books.find((book, index) => {
                bookIndex = index;
                return book.id === bookId;
            });


            if (bookToChage) {
                // coming from shelve list
                const bookID = bookToChage.id;
                BooksAPI.update(bookToChage, shelveName).finally(() => {
                    BooksAPI.get(bookID).then(book => {
                        // unmutable shallow array
                        const booksTmp = tmpState.books.slice(0, bookIndex).concat(tmpState.books.slice(bookIndex + 1));
                        booksTmp.push(book);
                        tmpState.books = booksTmp;
                        this.setState(tmpState);
                    })
                });
            } else {
                // coming from shelve list
                let bookToChange = tmpState.searchBooks.find((book, index) => {
                    return book.id === bookId;
                });
                BooksAPI.update(bookToChange, shelveName).finally(() => {
                        BooksAPI.get(bookId).then(book => {
                            // unmutable shallow array
                            tmpState.books = [].concat(tmpState.books, book);
                            this.setState(tmpState);
                        });
                    }
                );

            }
        }
    }


    render() {


        return (

            <div className="app">
                <Switch>
                    <Route path="/search" render={() =>
                        <SearchPage searchText={this.state.searchText} searchBooksHandler={this.searchBooksHandler} searchBooks={this.state.searchBooks} shelves={this.state.shelves}
                                    changeShelveEventHandler={this.changeShelveEventHandler}/>
                    }/>
                    <Route path="/" exact render={() =>
                        <ShelveListPage changeShelveEventHandler={this.changeShelveEventHandler} shelves={this.state.shelves} books={this.state.books}/>
                    }/>
                </Switch>

            </div>
        )
    }
}

export default BooksApp
