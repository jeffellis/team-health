import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AppBody from './components/AppBody';
import AppHeader from './components/AppHeader'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppBody/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Yo!</h1>
        </header> */}
      </div>
    );
  }
}

export default App;
