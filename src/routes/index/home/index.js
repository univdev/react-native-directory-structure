import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './.components/TabBar';
import HomeIndex from '../../../pages/home/index';
import HomeWork from '../../../pages/home/work';

export default () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(e) => {
        return (
          <TabBar
            navigation={e.navigation}
          />
        );
      }}
    >
      <Tab.Screen
        name="Home.Index"
        component={HomeIndex}
      ></Tab.Screen>
      <Tab.Screen
        name="Home.Work"
        component={HomeWork}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};