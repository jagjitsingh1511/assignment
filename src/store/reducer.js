import { combineReducers } from 'redux';
import HomeReducer from './homepageReducer';

export default combineReducers({
  homeReducer: HomeReducer,
});
