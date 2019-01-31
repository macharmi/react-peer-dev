import React, { Component } from 'react';
import Menu from './components/menu';
import NewBookContainer from './containers/newBookContainer'
import BookListContainer from './containers/bookListContainer'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Menu></Menu>
            <Route path="/list" exact component={BookListContainer}></Route>
            <Route path="/new" exact component={NewBookContainer}></Route>
            <Route path="/" exact component={BookListContainer}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
