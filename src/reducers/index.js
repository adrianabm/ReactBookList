import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

// Any key to the object that we provide to combineReducers ends up as a key on the global state
// For each key, we assign one reducer, and that reducer is responsible for creating that piece of the application state
// so, for example, whatever ActiveBook returns, it will be available as activeBook piece of application state.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
})

export default rootReducer;
