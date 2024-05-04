import types from '../types';
import store from '../store';
import auth from '@react-native-firebase/auth';
const {dispatch} = store;

export const login = loginData => {
  console.log(loginData, 'actions');
  dispatch({
    type: types.LOGIN,
    payload: loginData,
  });
};

export const signup = async signupData => {
  try {
    console.log(signupData, 'signup data at actions');
   const res =  await auth().createUserWithEmailAndPassword(signupData)
   console.log(res , " resinSignUp ")
  dispatch({
    type: types.SIGNUP,
    payload: signupData,
  });
  } catch (error) {
    console.log(error)
  }
};
