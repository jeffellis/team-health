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
    );
  }
}

export default Header;