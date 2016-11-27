import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for: { this.props.book.title } </h3>
        <div>Number of pages: { this.props.book.pages }</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // new prop book is the KEY
    // referrencing activeBook from the index.js inside the reducers: the ActiveBook reducer is creating the activeBook piece of state
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
