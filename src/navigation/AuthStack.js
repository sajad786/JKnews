import React from 'react';
import {Login, Signup} from '../Screens';
import navigationStrings from './navigationStrings';

const AuthStack = Stack => {
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.SIGNUP}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
