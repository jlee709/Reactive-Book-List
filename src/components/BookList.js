import React from 'react';
import BookListItem from './BookListItem';

const BookList = ( props ) => {
  console.log(props);
  return (
    <div className="book-list">
    {props.books.map(function(book){
      return ( 
        <BookListItem key={book._id} title={book.title} author={book.author}/>
        )
    })}
    </div>
  );
};

export default BookList;



