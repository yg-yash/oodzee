import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../../../constants/Colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const PersonalisationSettingsScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Personalisation Settings',
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.greyText}>General Settings</Text>
          <View style={styles.itemList}>
            <Icon
              name="location-pin"
              size={20}
              color={Colors.primaryGradient}
            />
            <Text style={styles.listItemText}>Location service permission</Text>
          </View>
          <View style={styles.itemList}>
            <Icon name="bell" size={20} color={Colors.primaryGradient} />
            <Text style={styles.listItemText}>Notification permission</Text>
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
  itemText: {
    fontSize: 14,
    lineHeight: 21,
  },
  greyText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  listItemText: {
    marginLeft: 20,
    fontSize: 15,
    lineHeight: 21,
  },
});

export default PersonalisationSettingsScreen;
