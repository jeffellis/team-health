import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrentTopic, getVote} from '../reducers/surveyReducer';
import SurveyTopic from './SurveyTopic';
import { surveyTopicVote } from '../actions/SurveyActions';
const mapStateToProps = (state) => {
  const topic = getCurrentTopic(state);
  return {
    onChange: React.PropTypes.func.isRequired,
    topic,
    vote: getVote(state, topic)
  };
};

class SurveyContainer extends Component {

  onVote = (vote) => {
    this.props.dispatch(surveyTopicVote(vote, this.props.topic));
  };

  render() {
    return (
        <div className="survey-container">
          <SurveyTopic topic={ this.props.topic } vote={ this.props.vote } onVote={ this.onVote }/>
        </div>
    );
  }
}

export default connect(mapStateToProps)(SurveyContainer);
