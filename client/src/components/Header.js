import React, { Component } from 'react';
// import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
        <span className="App-intro">
            <img src="/first-aid-minion.jpg" className="App-logo" alt="logo" />
            <h2>Squad Health Check</h2>
        </span>
      </div>
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React Yo!</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default Header;