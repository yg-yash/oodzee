import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddPaymentMethodScreen from '../Screens/MainScreens/PaymentsScreen/AddPaymentMethodScreen/AddPaymentMethodScreen';
import TermsScreen from '../Screens/MainScreens/TermsScreen/TermsScreen';
import AppDrawerNavigator from './AppDrawerNavigator';

const Stack = createStackNavigator();

const AppStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="AddPayment"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="AddPayment" component={AddPaymentMethodScreen} />
    <Stack.Screen name="Terms" component={TermsScreen} />
    <Stack.Screen name="Dashboard" component={AppDrawerNavigator} />
  </Stack.Navigator>
);

export default AppStackNavigator;
