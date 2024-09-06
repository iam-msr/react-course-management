// src/redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'; // Import the rootReducer that combines all reducers

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Add Redux DevTools support
);

export default store;
