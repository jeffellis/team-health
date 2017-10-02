import { combineReducers, createStore as reduxCreateStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import surveyReducer from '../reducers/surveyReducer';

const reducers = {
    survey: surveyReducer
};


export default function createStore() {
    let enhancer;
    const middleware = [
       thunkMiddleware,
    ];

    enhancer = applyMiddleware(...middleware);
    return reduxCreateStore(combineReducers(reducers), enhancer);
}

export const karma = 'karma'; // necessary for stubbing in tests
