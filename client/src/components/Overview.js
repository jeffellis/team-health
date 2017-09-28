import React, { Component } from 'react';
import './Overview.css';

class Overview extends Component {

  render() {
    return(
      <div>
        <p className="App-intro">
          How healthy is your squad? Create a workshop and see.
        </p>
        <img src="/squad-health-check-model-overview.png" className="overview-image" alt="overview" />
      </div>
    );
  }
}

export default Overview;