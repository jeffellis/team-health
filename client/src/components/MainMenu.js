import React, { Component } from 'react';
import Button from 'material-ui/Button';

class MainMenu extends Component {

  render() {
    const buttonProps = {
      color: 'primary',
      className: 'MainMenu-Button'
    };

    return(
      <div className='MainMenu'>
        <p className="App-intro">
          How healthy is your squad? Create a workshop and see.
        </p>
        <div>
          <Button { ...buttonProps } onClick={ this.createWorkshop }>
            Create a Workshop
          </Button>
        </div>
        <div>
          <Button { ...buttonProps } onClick={ this.joinWorkshop }>
            Join a Workshop
          </Button>
        </div>
      </div>
    );
  }

  createWorkshop() {
    console.log('Creating workshop');
  }

  joinWorkshop() {
    console.log('Joining workshop');
  }
}

export default MainMenu;