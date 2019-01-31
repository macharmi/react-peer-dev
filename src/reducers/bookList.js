const initialState = {
    books: [
      {title: "Alchmist", author: "Paolo Coelho"},
      {title: "Farwell to arms", author: "Ernest Heminguy"}
    ]
  };

  const bookListReducer = (state = initialState, action) => {
      let newState;
      switch (action.type) {
        case 'INIT_BOOK_LIST':
          newState = { ...state, books: action.payload  }
          return newState
        case 'ADD_NEW_BOOK':
          console.log(state)
          const books = [...state.books, action.payload]
          console.log({ ...state, books: books })
          newState = { ...state, books: books }
          return newState
        default:
          return state
      }
    }
    export default bookListReducer;