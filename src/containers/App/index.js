import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
import { 
  getBooksFromFakeXHR, 
  addBookToFakeXHR, 
  getBookByIdFromFakeXHR
} from '../../lib/books.db';


class App extends Component {
  constructor(){
    super();

    // this is our "initial state"
    this.state = {
      books: []
    };
  }

  addNewBook(BookTitle){
    let newBook = {
      title: BookTitle
    };

    this.setState({
      books: [...this.state.books, newBook]
    });
  }

  componentWillMount(){
    console.log('I am here');
    getBooksFromFakeXHR().then((data) =>{
      this.setState({
        books: [...data]
      });
    });
  }

  componentDidMount(){
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="App">

        <NewBookForm
          quote="What is the title of your book?"
          addNewBook={this.addNewBook.bind(this)}
        />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;