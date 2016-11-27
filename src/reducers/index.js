import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

// Any key to the object that we provide to combineReducers ends up as a key on the global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
})

export default rootReducer;
