import React, { Component } from 'react';
import Overview from './Overview';

class AppBody extends Component {

  render() {
    const contents = (
      <Overview/>
    );

    return(
      <div className='AppBody'>
        { contents }
      </div>
    );
  }
}

export default AppBody;