import React, { Component } from 'react';
import './App.css';

import SurveyContainer from './components/SurveyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span className="App-intro">
              <img src="/first-aid-minion.jpg" className="App-logo" alt="logo" />
              <h2>Welcome to Team Health</h2>
          </span>
        </div>
        <SurveyContainer/>
      </div>
    );
  }
}

export default App;
