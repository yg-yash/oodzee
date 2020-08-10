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
import fonts from '../../../constants/fonts';
import {Icon} from 'react-native-elements';

const filterList = [
  'Vegetarian',
  'Vegan',
  'Lactos Free',
  'Gluten Free',
  'Only show surplus',
];

const FilterScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'left',
      headerLeft: () => null,
      headerRight: () => (
        <Icon
          type="antdesign"
          name="close"
          onPress={() => navigation.goBack()}
        />
      ),
      headerTitleStyle: {
        fontFamily: fonts.FONT_REGULAR,
        fontSize: 20,
        lineHeight: 30,
      },
    });
  }, [navigation]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const renderFilters = (item, index) => {
    return index === filterList.length - 1 ? (
      <View style={styles.listLastItem}>
        <Text
          style={[
            styles.itemText,
            {color: isEnabled ? Colors.primaryGradient : 'black'},
          ]}>
          {item}
        </Text>
        <Switch
          value={isEnabled}
          trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
          thumbColor={isEnabled ? Colors.primaryGradient : '#f4f3f4'}
          ios_backgroundColor="#E5E5E5"
          onValueChange={toggleSwitch}
        />
      </View>
    ) : (
      <View style={styles.itemContainer}>
        <Text
          style={[
            styles.itemText,
            {color: isEnabled ? Colors.primaryGradient : 'black'},
          ]}>
          {item}
        </Text>
        <Switch
          value={isEnabled}
          trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
          thumbColor={isEnabled ? Colors.primaryGradient : '#f4f3f4'}
          ios_backgroundColor="#E5E5E5"
          onValueChange={toggleSwitch}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={filterList}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => renderFilters(item, index)}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => setIsEnabled(false)}>
          <Text style={styles.button}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.button, {color: Colors.primaryGradient}]}>
            Save {'&'} Continue
          </Text>
        </TouchableOpacity>
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
    marginTop: 30,
    width: '100%',
    padding: 20,
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
    fontFamily: fonts.FONT_REGULAR,
  },
});

export default FilterScreen;
