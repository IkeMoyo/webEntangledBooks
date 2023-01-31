import React, { Component } from 'react';
import Books from './components/Books';
import AddBook from './components/AddBook';

class App extends Component {
  state = {
      books: [
        {
          title: "Book 1",
          author: "Author 1",
          publicationDate: "",
          edit: false
        },
        {
          title: "Book 2",
          author: "Author 2",
          publicationDate: "",
          edit: false
        },
      ]
    }
  
  handleAddBook = (book) => {
      this.setState({...this.state.books, book})
    }

  
  render() {
    
    return (
      <div className='container'>
        <h1>Hello World</h1>
        <AddBook onAddBook={this.handleAddBook}/>
        <Books books={this.state.books}/>
      </div>
    );
  }
}

export default App;
