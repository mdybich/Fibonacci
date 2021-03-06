import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from './App';
import fibonacci from "./reducers/FibonacciReducer"
import quickSort from "./reducers/QuickSortReducer";
import './index.css';

const reducers = combineReducers({
  fibonacci,
  quickSort
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);