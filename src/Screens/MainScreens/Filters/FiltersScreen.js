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

const FiltersScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const renderFilters = (item, index) => {
    return index === filterList.length - 1 ? (
      <View style={styles.listLastItem}>
        <Text
          style={[
            styles.itemText,
            {color: isEnabled ? Colors.secondaryGradient : 'black'},
          ]}>
          {item}
        </Text>
        <Switch
          value={isEnabled}
          trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
          thumbColor={isEnabled ? Colors.secondaryGradient : '#f4f3f4'}
          ios_backgroundColor="#E5E5E5"
          onValueChange={toggleSwitch}
        />
      </View>
    ) : (
      <View style={styles.itemContainer}>
        <Text
          style={[
            styles.itemText,
            {color: isEnabled ? Colors.secondaryGradient : 'black'},
          ]}>
          {item}
        </Text>
        <Switch
          value={isEnabled}
          trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
          thumbColor={isEnabled ? Colors.secondaryGradient : '#f4f3f4'}
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
        <TouchableOpacity>
          <Text style={[styles.button, {color: Colors.secondaryGradient}]}>
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
    elevation: 16,
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
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
});

export default FiltersScreen;
