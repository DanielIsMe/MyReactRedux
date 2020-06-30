import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './first';
import Second from './second';

function App() {
  return (
    <div className="App">
      <Second />
      <First />
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
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
setInterval(First, 1000);
export default App;
