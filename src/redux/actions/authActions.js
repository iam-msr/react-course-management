// src/redux/actions/authActions.js
export const loginUser = (user) => {
    return {
      type: 'LOGIN_USER',
      payload: user
    };
  };
  
  export const logoutUser = () => {
    return {
      type: 'LOGOUT_USER'
    };
  };

  // New action to update user data (e.g., after progress update)
export const updateUser = (updatedUser) => {
  return {
    type: 'UPDATE_USER',
    payload: updatedUser
  };
};
  