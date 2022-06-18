import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Search, Home, NewsDetails, CardViewNews} from '../Screens';
import navigationStrings from './navigationStrings';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
      <Stack.Screen name={navigationStrings.SEARCH} component={Search} />
      <Stack.Screen
        name={navigationStrings.CARDVIEWDETAILS}
        component={CardViewNews}
      />
      <Stack.Screen
        name={navigationStrings.NEWSDETAILS}
        component={NewsDetails}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
