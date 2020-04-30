import { combineReducers } from 'redux';
import auth from './auth';
import kroo from './kroo';
import message from './message';

export default combineReducers({
  auth,
  kroo,
  message,
});
