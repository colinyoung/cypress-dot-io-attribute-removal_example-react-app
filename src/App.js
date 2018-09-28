import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            data-test="not_in_prod_build"
            data-cy="not_in_prod_build"
            data-testid="not_in_prod_build"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
