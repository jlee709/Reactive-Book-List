import React from 'react';

const BookListItem = ( props ) => {
  console.log(props);
  return (
    <div className="book">
      <div>Book Title: { props.book.title }</div>
    </div>
  );
}

export default BookListItem;