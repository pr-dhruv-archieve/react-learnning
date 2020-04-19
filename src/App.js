import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './com/soma/component/MyFirstComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyFirstComponent />
      </header>
    </div>
  );
}

export default App;
