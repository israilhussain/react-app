import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';

import reducer from './reducers/ageReducer';

const store = createStore(reducer, applyMiddleware(thunk));
//ReactDOM.render(element, container, callback)
ReactDOM.render(<Provider>
  <App store={ store }/>
</Provider>, document.getElementById('root'));

