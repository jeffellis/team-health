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

const surveyReducer = (state = _getInitialState(), action) => {
  switch (action.type) {

    case 'vote':
      state = _recordVote(state, action.payload);
      break;

    default:
      break;
  }
  return state;
};

const _recordVote = (state, {topic, vote}) => {
  let votes = state.get('votes');
  return state.setIn(['votes', topic.get('id')], vote);
};

export const getSurvey = (state) => {
  return state[stateKey];
};

export const getCurrentTopic = (state) => {
  const survey = getSurvey(state);
  const surveyTopics = survey.get('topics');
  return surveyTopics.get(survey.get('step'));
};

export const getVotes = (state) => {
  return state.votes;
}

export const getVote = (state, topic) => {
  const votes = state[stateKey].get('votes');
  return votes.get(topic.get('id'));
}

export default surveyReducer;