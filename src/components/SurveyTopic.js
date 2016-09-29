import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component } from 'react';
import StopLight from './StopLight';
import './SurveyTopic.css';

export default class SurveyTopic extends Component {
  static propTypes = {
    onVote: React.PropTypes.func.isRequired,
    topic: ImmutablePropTypes.map
  };

  render() {
    let mehContent = this.props.topic.get('meh') || "\u0020";

    return (
        <div className="topic">
          <h2 className="topic-area">{ this.props.topic.get('area') }</h2>
          <div className="topic-box">
            <StopLight onChange={ this.props.onVote }/>
            <div className="topic-example-box">
              <div className="topic-examples">
                <div className="topic-example topic-awesome">
                  Awesome: { this.props.topic.get('awesome') }
                </div>
                <div className="topic-example topic-meh">
                  { mehContent }
                </div>
                <div className="topic-example topic-crappy">
                  Crappy: { this.props.topic.get('crappy') }
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}