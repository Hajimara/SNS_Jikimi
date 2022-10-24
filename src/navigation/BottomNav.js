import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Tab.Screen name='login' component={LoginScreen}></Tab.Screen> */}
      <Tab.Screen name='home' component={HomeScreen}></Tab.Screen>
      <Tab.Screen name='profile' component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomNav;
