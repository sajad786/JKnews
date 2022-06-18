import {combineReducers} from 'redux';
import types from '../types';
import auth from './auth';
import newsData from './newsData';

const appReducer = combineReducers({
  auth,
  newsData,
});

const rootReducer = (state, action) => {
  if (action.type == types.CLEAR_REDUX_STATE) {
    return (state = undefined);
  }
  return appReducer(state, action);
};

export default rootReducer;
