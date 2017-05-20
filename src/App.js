import React, { Component } from 'react';
import { Header } from "./components";
import FibonacciContainer from "./containers/fibonacci/FibonacciContainer";
import QuickSortContainer from "./containers/quicksort/QuickSortContainer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <FibonacciContainer />
        <QuickSortContainer />
      </div>
    );
  }
}

export default App;
