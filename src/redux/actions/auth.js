import types from '../types';
import store from '../store';
const {dispatch} = store;

export const login = loginData => {
  console.log(loginData, 'actions');
  dispatch({
    type: types.LOGIN,
    payload: loginData,
  });
};

export const signup = signupData => {
  console.log(signup, 'signup data at actions');
  dispatch({
    type: types.SIGNUP,
    payload: signupData,
  });
};
