import React from 'react';

const book = (props) => {


    let thumbnail = "";
    try {
        thumbnail = props.book.imageLinks.thumbnail;
    } catch (e) {
        // just without picture
    }

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            "url(" + thumbnail + ")",
                    }}
                />
                <div className="book-shelf-changer">
                    <select value={props.book.shelf} onChange={(e) => {
                        console.log('event value', e.target.value);
                        console.log('event name', e.target.name);
                        props.shelveChangeHandler(props.book.id, e)
                    }}>
                        <option value="move" disabled>
                            Move to...
                        </option>
                        {props.shelves.map((shelve) => {
                            return <option key={shelve.code} value={shelve.code}>{shelve.title}</option>
                        })}

                    </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>
        </div>
    )
};
export default book;
