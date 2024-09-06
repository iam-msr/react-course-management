// src/redux/reducers/rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';  // Auth reducer
import courseReducer from './courseReducer';  // Course reducer

const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer
});

export default rootReducer;
