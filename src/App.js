import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p id="test" data-test="not_in_prod_build">
            This text is only green in production
          </p>
        </header>
      </div>
    );
  }
}

export default App;
