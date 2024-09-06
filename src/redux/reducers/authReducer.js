// src/redux/reducers/authReducer.js
const initialState = {
  isAuthenticated: false,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case 'LOGOUT_USER':
      return initialState;
    case 'UPDATE_USER': // Handle user update
      return {
        ...state,
        user: action.payload // Update the user in the store
      };
    default:
      return state;
  }
};

export default authReducer;
