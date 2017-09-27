import Immutable from 'immutable'

export const stateKey = 'survey';

function _getTopic(id, area, awesome, crappy, meh = '') {
  return {
    id,
    area,
    awesome,
    crappy,
    meh
  };
}

function _getInitialState() {
  return Immutable.fromJS({
    step: 0,
    topics: [
      _getTopic(
          1,
          'Easy to release',
          'Releasing is simple, safe, painless & mostly automated.',
          'Releasing is risky, painful, lots of manual work, and takes forever.'
      ),
      _getTopic(
          2,
          'Suitable process',
          'Our way of working fits us perfectly',
          'Our way of working sucks'
      )
    ],
    votes: {}
  });
}

const _recordVote = (state, {topic, vote}) => {
  return state.setIn(['votes', topic.get('id')], vote);
};

const surveyReducer = (state = _getInitialState(), action) => {
  switch (action.type) {

    case 'vote':
      state = _recordVote(state, action.payload);
      break;

    case 'nextTopic':
      state = state.set('step', state.get('step') + 1);
      break;

    case 'previousTopic':
      state = state.set('step', state.get('step') - 1);
      break;

    default:
      break;
  }
  return state;
};

export const getSurvey = (state) => {
  return state[stateKey];
};

export const getCurrentTopic = (state) => {
  const survey = getSurvey(state);
  const surveyTopics = survey.get('topics');
  return surveyTopics.get(survey.get('step'));
};

export const getVote = (state, topic) => {
  const votes = state[stateKey].get('votes');
  return votes.get(topic.get('id'));
};

export const getCurrentStep = (state) => {
  return state[stateKey].get('step');
};

export const getNumberOfSteps = (state) => {
  return state[stateKey].get('topics').size;
};

export default surveyReducer;