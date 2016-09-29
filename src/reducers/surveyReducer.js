import Immutable from 'immutable'

export const stateKey = 'survey';

function _getTopic(area, awesome, crappy, meh = '') {
    return {
        area,
        awesome,
        crappy,
        meh
    };
}

function _getInitialState () {
    return Immutable.fromJS({
        step: 0,
        topics: [
            _getTopic(
                'Easy to release',
                'Releasing is simple, safe, painless & mostly automated.',
                'Releasing is risky, painful, lots of manual work, and takes forever.'
            ),
            _getTopic(
                'Suitable process',
                'Our way of working fits us perfectly',
                'Our way of working sucks'
            )
        ]
    });
}

const surveyReducer = ( state = _getInitialState(), action ) => {
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

export default surveyReducer;