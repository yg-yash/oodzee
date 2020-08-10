import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View, Text, Switch, ScrollView} from 'react-native';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';

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
      headerTitleStyle: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: fonts.FONT_REGULAR,
      },
    });
  }, [navigation]);

  const toggleSwitch = setOption => setOption(previousState => !previousState);

  return (
    <View style={styles.screen}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.greyText}>General Settings</Text>
            <View style={styles.itemContainer}>
              <Text
                style={[
                  styles.itemText,
                  {
                    color: pushNotifications ? Colors.primaryGradient : 'black',
                  },
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
                  {
                    color: muteNotifications ? Colors.primaryGradient : 'black',
                  },
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
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
    fontFamily: fonts.FONT_REGULAR,
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
    fontFamily: fonts.FONT_REGULAR,
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(153, 153, 153, 0.2)',
  },
});

export default NotificationScreen;
