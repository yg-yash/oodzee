import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddPaymentMethodScreen from '../Screens/MainScreens/PaymentsScreen/AddPaymentMethodScreen/AddPaymentMethodScreen';
import TermsScreen from '../Screens/MainScreens/TermsScreen/TermsScreen';
import DashboardScreen from '../Screens/MainScreens/Dashboard/Dashboard';
import FoodDetailScreen from '../Screens/MainScreens/FoodDetail/FoodDetail';
import ThankYouScreen from '../Screens/MainScreens/ThankYouScreen/ThankYouScreen';
import OrderStatusScreen from '../Screens/MainScreens/Orders/OrderStatusScreen/OrderStatusScreen';
import OrderDoneScreen from '../Screens/MainScreens/Orders/OrderDoneScreen/OrderDoneScreen';
import OrderDoneCompleteScreen from '../Screens/MainScreens/Orders/OrderDoneScreen/OrderDoneCompleteScreen';
import PaymentDataSceen from '../Screens/MainScreens/PaymentsScreen/PayementData/PaymentDataSceen';
import PaymentScreen from '../Screens/MainScreens/PaymentsScreen/PaymentScreen/PaymentScreen';

const Stack = createStackNavigator();

const AppStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="AddPayment"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="AddPayment" component={AddPaymentMethodScreen} />
    <Stack.Screen name="Terms" component={TermsScreen} />
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
    <Stack.Screen name="ThankYou" component={ThankYouScreen} />
    <Stack.Screen name="PaymentData" component={PaymentDataSceen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="OrderDone" component={OrderDoneScreen} />
    <Stack.Screen
      name="OrderDoneComplete"
      component={OrderDoneCompleteScreen}
    />
    <Stack.Screen name="OrderStatus" component={OrderStatusScreen} />
  </Stack.Navigator>
);

export default AppStackNavigator;
