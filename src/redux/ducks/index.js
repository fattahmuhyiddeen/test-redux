import { combineReducers } from 'redux';
import profile from './profile';
import general from './general';

export default combineReducers({
  profile,
  general
});
