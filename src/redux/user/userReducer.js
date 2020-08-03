import userActionTypes from "./userActionTypes";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return {
        ...state,
        currentUser: action.payload
      };

    case userActionTypes.LOGOUT:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};

export default userReducer;
