import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overview from './Overview';
import SurveyContainer from './SurveyContainer';

export const VIEW_TYPES = {
  OVERVIEW: 0,
  WORKSHOP: 1
};

class AppBody extends Component {

  static propTypes = {
    view: PropTypes.number
  }

  render() {
    let contents;

    switch(this.props.view) {
      case VIEW_TYPES.WORKSHOP:
        contents = ( <SurveyContainer/> );
        break;
        
      default:
        contents = ( <Overview/> );
        break;
    }

    return(
      <div className='AppBody'>
        { contents }
      </div>
    );
  }
}

export default AppBody;