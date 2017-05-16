import React, { Component } from 'react';
import { Header } from "./components";
import FibonacciContainer from "./containers/fibonacci/FibonacciContainer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <FibonacciContainer />
      </div>
    );
  }
}

export default App;
