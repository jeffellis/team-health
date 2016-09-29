import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentTopic} from '../reducers/surveyReducer';
import SurveyTopic from './SurveyTopic';

const mapStateToProps = (state) => {
  return {
    onChange: React.PropTypes.func.isRequired,
    topic: getCurrentTopic(state)
  };
};

class SurveyContainer extends Component {

  onVote(vote) {
    console.log(vote);
  }

  render() {
    return (
        <div className="survey-container">
          <SurveyTopic topic={ this.props.topic } onVote={ this.onVote }/>
        </div>
    );
  }
}

export default connect(mapStateToProps)(SurveyContainer);
