import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import './AppHeader.css';

export const MENU_ITEMS = {
  CREATE_WORKSHOP: 'create-workshop',
  JOIN_WORKSHOP: 'join-workshop'
};

class AppHeader extends Component {
  static propTypes = {
    onMenuItemSelect: PropTypes.func
  };

  state = {
    anchorEl: null,
    menuOpen: false,
  };

  handleClick = event => {
    this.setState({ menuOpen: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = (event) => {
    const menuItem = event.target && event.target.getAttribute('value');
    if (menuItem && this.props.onMenuItemSelect) {
      this.props.onMenuItemSelect(menuItem);
    }
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <div >
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu" onClick={ this.handleClick }>
              <MenuIcon />
            </IconButton>
            { this._getMenu() }
            <Typography type="title" color="inherit" className="App-title">
              Squad Health Check
            </Typography>
            <img src="/first-aid-minion.jpg" className="App-logo" alt="logo" />
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  _getMenu() {
    const menuProps = {
      anchorEl: this.state.anchorEl,
      open: this.state.menuOpen,
      onRequestClose: this.handleRequestClose
    };

    const menuItemProps = {
      selected: false,
      onClick: this.handleRequestClose
    };

    return (
      <Menu { ...menuProps }>
        <MenuItem value={ MENU_ITEMS.CREATE_WORKSHOP } { ...menuItemProps } >
          Create A Workshop
        </MenuItem>
        <MenuItem value={ MENU_ITEMS.JOIN_WORKSHOP } { ...menuItemProps } >
          Join A Workshop
        </MenuItem>
      </Menu>
    )
  }
}

export default AppHeader;