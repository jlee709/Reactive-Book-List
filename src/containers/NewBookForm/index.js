import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      nameInput: ''
    };
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.nameInput);

    this.props.addNewBook(this.state.nameInput);
  }

  handleChange(event){
    this.setState({
      nameInput: event.target.value
    });
  }

  render(){
    return (
      <div>
        <h2>{this.props.quote}</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="name" onChange={this.handleChange.bind(this)}/>
          <input type="submit" value="Write Name"/>
        </form>
        <p>{this.state.nameInput}</p>
      </div>
    )
  }
}

export default NewBookForm;

