import {View, Text, Image} from 'react-native';
import React from 'react';
import {Home, Profile, Videos} from '../Screens';
// import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import navigationStrings from './navigationStrings';
import imagePath from '../constants/imagePath';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  // const switchTabs = ({focused, color, size}) => {
  //   console.log({focused, color, size}, 'switch tabs');

  // };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarIcon: switchTabs,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: moderateScaleVertical(60),
          paddingBottom: moderateScaleVertical(5),
          // paddingTop: moderateScaleVertical(10),
        },
        // tabBarLabel: none,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={imagePath.home}
                  resizeMode="contain"
                  style={{
                    width: focused ? moderateScale(28) : moderateScale(23),
                    tintColor: focused ? 'black' : 'grey',
                  }}
                />
              </View>
            );
          },
        }}
        name={navigationStrings.HOMESTACK}
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={imagePath.video}
                  resizeMode="contain"
                  style={{
                    width: focused ? moderateScale(30) : moderateScale(25),
                    tintColor: focused ? 'black' : 'grey',
                  }}
                />
              </View>
            );
          },
        }}
        name={navigationStrings.VIDEOS}
        component={Videos}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={imagePath.profile}
                  resizeMode="contain"
                  style={{
                    width: focused ? moderateScale(30) : moderateScale(25),
                    tintColor: focused ? 'black' : 'grey',
                  }}
                />
              </View>
            );
          },
        }}
        name={navigationStrings.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
