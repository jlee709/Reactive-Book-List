import React from 'react';

const BookListItem = ( props ) => {
  console.log(props);
  return (
    <div className="book">
      <h4>Book Title: { props.title }</h4>
      <p>Author: { props.author }</p>
    </div>
  );
}

export default BookListItem;