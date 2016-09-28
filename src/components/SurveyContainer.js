import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentTopic } from '../reducers/surveyReducer';
import logo from '../logo.svg';

const mapStateToProps = (state) => {
    return {
        topic: getCurrentTopic(state)
    };
};

class SurveyContainer extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Team Health</h2>
                </div>
                <div className="topic-area">Area: { this.props.topic.get('area') }</div>
                <div className="topic-awesome">Awesome: { this.props.topic.get('awesome') }</div>
                <div className="topic-crappy">Crappy: { this.props.topic.get('crappy') }</div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SurveyContainer);



