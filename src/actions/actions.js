/*
 *  constants
 */

export const ADD_NEW_BOOK = 'ADD_NEW_BOOK'
export const INIT_BOOK_LIST = 'INIT_BOOK_LIST'

/*
 * action creators
 */

export function initBookList(books) {
  return { type: INIT_BOOK_LIST, payload: books }
}

export function addNewBook(book) {
    return { type: ADD_NEW_BOOK, payload: book }
  }