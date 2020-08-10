import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../Screens/AuthScreens/LandingScreen/LandingScreen';
import SignInScreen from '../Screens/AuthScreens/SignInScreen/SignInScreen';
import ForgetPassworScreen from '../Screens/AuthScreens/ForgetPassword/ForgetPassword';
import SignUpScreen from '../Screens/AuthScreens/SignUpScreen/SignUpScreen';
import AppStackNavigator from './AppStackNavigator';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Landing" component={LandingPage} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Forget" component={ForgetPassworScreen} />
      <Stack.Screen name="App" component={AppStackNavigator} />
    </Stack.Navigator>
  );
}
