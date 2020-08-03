import userActionTypes from "./userActionTypes";

export const login = (userInformation) => ({
  type: userActionTypes.LOGIN,
  payload: userInformation,
});

export const logout = () => ({
  type: userActionTypes.LOGOUT,
});
