import React, { Component } from 'react';
import MainMenu from './MainMenu';

class AppBody extends Component {

  render() {
    const contents = (
      <MainMenu/>
    );

    return(
      <div className='AppBody'>
        { contents }
      </div>
    );
  }
}

export default AppBody;