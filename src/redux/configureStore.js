import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';
import dragonsReducer from './dragons/dragons';

const reducer = combineReducers({
  rockets: rocketsReducer,
  missionsReducer,
  dragons: dragonsReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));
export default store;
