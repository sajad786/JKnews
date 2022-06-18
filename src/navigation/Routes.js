import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const userData = useSelector(i => i.auth.LoginData);
  console.log(userData, 'routes');
  return (
    <NavigationContainer>
      {userData && userData.email ? MainStack(Stack) : AuthStack(Stack)}
    </NavigationContainer>
  );
};

export default Routes;
