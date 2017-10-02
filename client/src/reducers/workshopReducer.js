import Immutable from 'immutable'

export const stateKey = 'workshop';

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
        'Beer',
        'Always a full keg of an amazing brew',
        'Kegs are often empty or contain beer starting with "Bud" or ending in "Lite"'
      ),
      _getTopic(
        2,
        'Easy to release',
        'Releasing is simple, safe, painless & mostly automated.',
        'Releasing is risky, painful, lots of manual work, and takes forever.'
      ),
      _getTopic(
        3,
        'Suitable process',
        'Our way of working fits us perfectly',
        'Our way of working sucks'
      ),
      _getTopic(
        4,
        "Foosball",
        "Our foosball facilities and skills are world class.",
        "Broken men, square balls, and unlevel tables"
      )      
    ],
    votes: {}
  });
}

const _recordVote = (state, {topic, vote}) => {
  return state.setIn(['votes', topic.get('id')], vote);
};

const workshopReducer = (state = _getInitialState(), action) => {
  switch (action.type) {

    case 'vote':
      state = _recordVote(state, action.payload);
      break;

    case 'nextTopic':
      state = state.set('step', _getNextStep(state));
      break;

    case 'previousTopic':
      state = state.set('step', _getPreviousStep(state));
      break;

    default:
      break;
  }
  return state;
};

const _getNextStep = (state) => {
  const step = state.get('step');
  if (step + 1 < state.get('topics').size) {
    return step + 1;
  }
  return step;
}

const _getPreviousStep = (state) => {
  const step = state.get('step');
  if (step - 1 >= 0) {
    return step - 1;
  }
  return step;  
}

export const getWorkshop = (state) => {
  return state[stateKey];
};

export const getCurrentTopic = (state) => {
  const workshop = getWorkshop(state);
  const workshopTopics = workshop.get('topics');
  return workshopTopics.get(workshop.get('step'));
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

export default workshopReducer;