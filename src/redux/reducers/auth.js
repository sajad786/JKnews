import types from '../types';

const initial_state = {
  LoginData: {},
  signupData: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.LOGIN:
      console.log(action.payload, 'reducer');
      return {
        ...state,
        LoginData: action.payload,
      };
    case types.SIGNUP:
      console.log(action.payload, 'signupdata in reducers');
      return {
        ...state,
        signupData: action.payload,
      };
    default:
      return {...state};
  }
}
