import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {ID: 1, Name:'p1', Colour: 'red'},
    {ID: 2, Name:'p2', Colour: 'white'},
    {ID: 3, Name:'p3', Colour: 'black'},
    {ID: 4, Name:'p4', Colour: 'black'},
    {ID: 5, Name:'p5', Colour: 'black'},
  ];

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
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
