import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../constants/Colors';

const filterList = [
  'Vegetarian',
  'Vegan',
  'Lactos Free',
  'Gluten Free',
  'Only show surplus',
];

const NotificationScreen = ({navigation}) => {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [muteNotifications, setMuteNotifications] = useState(false);
  const [premiersNotifications, setPremiersNotifications] = useState(false);
  const [fromLocation, setFromLocation] = useState(false);
  const [orderReminder, setOrderReminder] = useState(false);
  const [allowmessages, setAllowMessages] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Notifications',
    });
  }, [navigation]);

  const toggleSwitch = setOption => setOption(previousState => !previousState);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.greyText}>General Settings</Text>
          <View style={styles.itemContainer}>
            <Text
              style={[
                styles.itemText,
                {color: pushNotifications ? Colors.primaryGradient : 'black'},
              ]}>
              Push notifications
            </Text>
            <Switch
              value={pushNotifications}
              trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
              thumbColor={
                pushNotifications ? Colors.primaryGradient : '#f4f3f4'
              }
              ios_backgroundColor="#E5E5E5"
              onValueChange={() => toggleSwitch(setPushNotifications)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.greyText}>Sound</Text>
          <View style={styles.itemContainer}>
            <Text
              style={[
                styles.itemText,
                {color: muteNotifications ? Colors.primaryGradient : 'black'},
              ]}>
              Mute notifications
            </Text>
            <Switch
              value={muteNotifications}
              trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
              thumbColor={
                muteNotifications ? Colors.primaryGradient : '#f4f3f4'
              }
              ios_backgroundColor="#E5E5E5"
              onValueChange={() => toggleSwitch(setMuteNotifications)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.greyText}>Others</Text>
          <View style={styles.itemContainer}>
            <Text
              style={[
                styles.itemText,
                {
                  color: premiersNotifications
                    ? Colors.primaryGradient
                    : 'black',
                },
              ]}>
              Premiers notifications
            </Text>
            <Switch
              value={premiersNotifications}
              trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
              thumbColor={
                premiersNotifications ? Colors.primaryGradient : '#f4f3f4'
              }
              ios_backgroundColor="#E5E5E5"
              onValueChange={() => toggleSwitch(setPremiersNotifications)}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text
              style={[
                styles.itemText,
                {color: fromLocation ? Colors.primaryGradient : 'black'},
              ]}>
              From location you follow
            </Text>
            <Switch
              value={fromLocation}
              trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
              thumbColor={fromLocation ? Colors.primaryGradient : '#f4f3f4'}
              ios_backgroundColor="#E5E5E5"
              onValueChange={() => toggleSwitch(setFromLocation)}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text
              style={[
                styles.itemText,
                {color: orderReminder ? Colors.primaryGradient : 'black'},
              ]}>
              Order pick up reminder
            </Text>
            <Switch
              value={orderReminder}
              trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
              thumbColor={orderReminder ? Colors.primaryGradient : '#f4f3f4'}
              ios_backgroundColor="#E5E5E5"
              onValueChange={() => toggleSwitch(setOrderReminder)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.greyText}>In-app message</Text>
          <View style={styles.itemContainer}>
            <Text
              style={[
                styles.itemText,
                {color: allowmessages ? Colors.primaryGradient : 'black'},
              ]}>
              Allow in-app messages
            </Text>
            <Switch
              value={allowmessages}
              trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
              thumbColor={allowmessages ? Colors.primaryGradient : '#f4f3f4'}
              ios_backgroundColor="#E5E5E5"
              onValueChange={() => toggleSwitch(setAllowMessages)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    elevation: 16,
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  itemContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemText: {
    fontSize: 14,
    lineHeight: 21,
  },
  listLastItem: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(153, 153, 153, 0.2)',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 2,
    flexDirection: 'row',
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    fontSize: 18,
    lineHeight: 27,
    color: '#999999',
  },
  greyText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(153, 153, 153, 0.2)',
  },
});

export default NotificationScreen;
