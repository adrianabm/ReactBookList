import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={ book.title }
          className="list-group-item"
          onClick={ () => this.props.selectBook(book) }
        >
          { book.title }
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props (this.props) inside of BookList
  // In this case, we want to return the array of books inside BooksReducer

  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchtoProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  // Thats what bindActionCreators does with the dispatch
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(BookList)
