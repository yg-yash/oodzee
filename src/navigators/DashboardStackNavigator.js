import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from '../Screens/MainScreens/Dashboard/Dashboard';
import FoodDetailScreen from '../Screens/MainScreens/FoodDetail/FoodDetail';
import ThankYouScreen from '../Screens/MainScreens/ThankYouScreen/ThankYouScreen';
import OrderStatusScreen from '../Screens/MainScreens/Orders/OrderStatusScreen/OrderStatusScreen';
import OrderDoneScreen from '../Screens/MainScreens/Orders/OrderDoneScreen/OrderDoneScreen';
import OrderDoneCompleteScreen from '../Screens/MainScreens/Orders/OrderDoneScreen/OrderDoneCompleteScreen';
import PaymentDataSceen from '../Screens/MainScreens/PaymentsScreen/PayementData/PaymentDataSceen';
import PaymentScreen from '../Screens/MainScreens/PaymentsScreen/PaymentScreen/PaymentScreen';
import Orders from '../Screens/MainScreens/Orders/OrdersScreen/OrdersSceen';
import OrderDetailsSCreen from '../Screens/MainScreens/Orders/OrderDetailsScreen/OrderDetailsScreen';

const Stack = createStackNavigator();

const DashboardStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="Food Detail" component={FoodDetailScreen} />
    <Stack.Screen name="ThankYou" component={ThankYouScreen} />
    <Stack.Screen name="PaymentData" component={PaymentDataSceen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="OrderDone" component={OrderDoneScreen} />
    <Stack.Screen
      name="OrderDoneComplete"
      component={OrderDoneCompleteScreen}
    />
    <Stack.Screen name="OrderStatus" component={OrderStatusScreen} />
    <Stack.Screen name="Orders" component={Orders} />
    <Stack.Screen name="OrderDetails" component={OrderDetailsSCreen} />
  </Stack.Navigator>
);

export default DashboardStackNavigator;
