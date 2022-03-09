import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragons';

const reducer = combineReducers({
  dragons: dragonsReducer,
//   missions: missionsReducer,
//   rockets: rocketsReducer
});

const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));

export default store;
