import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrderScreen from '../Screens/MainScreens/Orders/OrdersScreen/OrdersSceen';
import UserMenu from '../Screens/MainScreens/UserScreens/UserMenu';
import OrderDetailsScreen from '../Screens/MainScreens/Orders/OrderDetailsScreen/OrderDetailsScreen';
import FilterScreen from '../Screens/MainScreens/Filters/FilterScreen';
import AddCreditsScreen from '../Screens/MainScreens/Credits/AddCreditsScreen';
import CreditsScreen from '../Screens/MainScreens/Credits/CreditsScreen';
import InviteFriendsScreen from '../Screens/MainScreens/InviteFriends/InviteFriendsScreen';
import OfferScreen from '../Screens/MainScreens/Offers/OfferScreen';
import SettingsScreen from '../Screens/MainScreens/Settings/SettingsScreen';
import FeedbackScreen from '../Screens/MainScreens/Feedback/FeedbackScreen';
import FeedbackChatScreen from '../Screens/MainScreens/Feedback/FeedbackChatScreen';
import EditProfileScreen from '../Screens/MainScreens/UserScreens/EditProfileScreen';
import DeleteUserScreen from '../Screens/MainScreens/UserScreens/DeleteUserScreen';
import UserPaymentMethods from '../Screens/MainScreens/UserScreens/UserPaymentMethodScreen';
import UserAddPaymentMethodScreen from '../Screens/MainScreens/UserScreens/UserAddPaymentMethodScreen';
import NotificationScreen from '../Screens/MainScreens/UserScreens/NotificationScreen';
import UnlockHiddenLocationScreen from '../Screens/MainScreens/UserScreens/UnlockHidddenLocationScreen';
import PersonalisationSettingsScreen from '../Screens/MainScreens/UserScreens/PersonalisationSettingsScreen';
import UserAgreementScreen from '../Screens/MainScreens/PrivacyandAgreements/UserAgreementScreen';
import PrivacyPolicyScreen from '../Screens/MainScreens/PrivacyandAgreements/PrivacyPolicyScreen';
import SoftwareLicenseScreen from '../Screens/MainScreens/PrivacyandAgreements/SoftwareLicenseScreen';
import FeedbackConversationScreen from '../Screens/MainScreens/Feedback/FeedbackCoversationScreen';

const Stack = createStackNavigator();

const UserStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="UserMenu">
    <Stack.Screen name="UserMenu" component={UserMenu} />
    <Stack.Screen name="Orders" component={OrderScreen} />
    <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
    <Stack.Screen name="Filter" component={FilterScreen} />
    <Stack.Screen name="Credits" component={CreditsScreen} />
    <Stack.Screen name="AddCredits" component={AddCreditsScreen} />
    <Stack.Screen name="InviteFriends" component={InviteFriendsScreen} />
    <Stack.Screen name="Offer" component={OfferScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Feedback" component={FeedbackScreen} />
    <Stack.Screen name="FeedbackChat" component={FeedbackConversationScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    <Stack.Screen name="DeleteUser" component={DeleteUserScreen} />
    <Stack.Screen name="UserPaymentMethods" component={UserPaymentMethods} />
    <Stack.Screen
      name="UserAddPaymentMethods"
      component={UserAddPaymentMethodScreen}
    />
    <Stack.Screen name="Notification" component={NotificationScreen} />
    <Stack.Screen name="Unlock" component={UnlockHiddenLocationScreen} />
    <Stack.Screen
      name="PersonalisationSettings"
      component={PersonalisationSettingsScreen}
    />
    <Stack.Screen name="UserAgreement" component={UserAgreementScreen} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    <Stack.Screen name="SoftwareLicense" component={SoftwareLicenseScreen} />
  </Stack.Navigator>
);

export default UserStackNavigator;
