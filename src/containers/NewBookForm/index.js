import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      titleInput: '',
      authorInput: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);

    this.handleAuthorChange = this.handleAuthorChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.nameInput);

    this.props.addNewBook(this.state.nameInput);
  }

  handleTitleChange(event){
    this.setStat({
      titleInput: event.target.value
    });
  }

  handleAuthorChange(event){
    this.setState({
      authorInput: event.target.value
    });
  }

  render(){
    return (
      <div>
        <h2>{this.props.quote}</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" onChange={this.handleChange}/>
          <input type="submit" value="Write Name"/>

        </form>
        <p>{this.state.nameInput}</p>
      </div>
    )
  }
}

export default NewBookForm;

