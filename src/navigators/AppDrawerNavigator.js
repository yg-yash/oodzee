import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardStackNavigator from './DashboardStackNavigator';
import UserStackNavigator from './UserStackNavigator';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Dashboard">
    <Drawer.Screen name="Dashboard" component={DashboardStackNavigator} />
    <Drawer.Screen name="User" component={UserStackNavigator} />
  </Drawer.Navigator>
);

export default AppDrawerNavigator;
