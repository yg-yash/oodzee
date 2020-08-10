import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardStackNavigator from './DashboardStackNavigator';
import UserStackNavigator from './UserStackNavigator';
import {Icon} from 'react-native-vector-icons';
import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();

// options={{
//   drawerLabel: 'Dashboard',
//   drawerIcon: ({focused, size}) => (
//     <Icon
//       tupe="materialicons"
//       name="home"
//       color={focused ? Colors.primaryGradient : '#999999'}
//     />
//   ),
// }}

const AppDrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Dashboard" screenOptions={{}}>
    <Drawer.Screen name="Dashboard" component={DashboardStackNavigator} />
    <Drawer.Screen name="User" component={UserStackNavigator} />
  </Drawer.Navigator>
);

export default AppDrawerNavigator;

// options={{
//         drawerLabel: 'Dashboard',
//         drawerIcon: ({focused, size}) => (
//           <Icon
//             tupe="font-awesome"
//             name="user"
//             color={focused ? Colors.primaryGradient : '#999999'}
//           />
//         ),
//       }}
