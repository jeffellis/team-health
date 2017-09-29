import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StopLight.css';

export default class StopLight extends Component {

  static propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  _getButtonClass( color ) {
    let className = `StopLight-button StopLight-${color}`;
    if (this.props.color && this.props.color.toLowerCase() === color.toLowerCase()) {
      className += ' StopLight-button-selected';
    }
    return className;
  }

  render() {
    return (
        <div className="StopLight-div">
          <div className={ this._getButtonClass('red') } onClick={ () => { this.props.onChange('red') } }/>
          <div className={ this._getButtonClass('yellow') } onClick={ () => { this.props.onChange('yellow') } }/>
          <div className={ this._getButtonClass('green') } onClick={ () => { this.props.onChange('green') } }/>
        </div>
    );
  }
}
