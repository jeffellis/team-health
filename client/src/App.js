import React, { Component } from 'react';
import './App.css';
import AppBody, { VIEW_TYPES } from './components/AppBody';
import AppHeader, { MENU_ITEMS } from './components/AppHeader'; 

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      view: VIEW_TYPES.OVERVIEW
    };  
  }

  render() {
    return (
      <div className="App">
        <AppHeader onMenuItemSelect={ this.onMenuItemSelect }/>
        <AppBody view={ this.state.view }/>
      </div>
    );
  }

  onMenuItemSelect = (item) => {
    let view = this.state.view;

    switch(item) {
      case MENU_ITEMS.CREATE_WORKSHOP:
        view = VIEW_TYPES.OVERVIEW;
        break;

      case MENU_ITEMS.JOIN_WORKSHOP:
        view = VIEW_TYPES.WORKSHOP;
        break;

      default:
        throw new Error(`Unexpected App menu item received: ${ item }`);
    }

    this.setState({ view });
  }
}

export default App;
