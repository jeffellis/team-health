import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    getCurrentTopic,
    getVote,
    getCurrentStep,
    getNumberOfSteps
} from '../reducers/surveyReducer';
import SurveyTopic from './SurveyTopic';
import {
    goToNextTopic,
    goToPreviousTopic,
    surveyTopicVote,
} from '../actions/SurveyActions';
import Button from 'material-ui/Button';

import "./SurveyContainer.css";

const mapStateToProps = (state) => {
  const topic = getCurrentTopic(state);
  return {
    currentStep: getCurrentStep(state),
    numberOfSteps: getNumberOfSteps(state),
    topic,
    vote: getVote(state, topic)
  };
};

class SurveyContainer extends Component {

  onVote = (vote) => {
    this.props.dispatch(surveyTopicVote(vote, this.props.topic));
  };

  nextTopic = () => {
    this.props.dispatch(goToNextTopic());
  };

  previousTopic = () => {
    this.props.dispatch(goToPreviousTopic());
  };

  render() {
    let nextProps = {
      color: "primary",
      type: "button",
      value: "Next",
      name: "nextTopic",
      onClick: this.nextTopic
    };
    let previousProps = {
      color: "primary",
      type: "button",
      value: "Previous",
      name: "previousTopic",
      onClick: this.previousTopic
    };

    if( this.props.currentStep === this.props.numberOfSteps - 1 ) {
      nextProps.disabled = true;
    }

    if( this.props.currentStep === 0 ) {
      previousProps.disabled = true;
    }

    return (
        <div className="survey-container">
          <SurveyTopic topic={ this.props.topic } vote={ this.props.vote } onVote={ this.onVote }/>
          <div className="survey-button-bar">
            <Button { ...previousProps }>
              Previous
            </Button>
            <Button { ...nextProps }>
              Next
            </Button>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps)(SurveyContainer);
