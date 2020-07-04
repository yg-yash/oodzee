import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Icon} from 'react-native-elements';

const PrivacyPolicy = ({navigation}) => {
  const [languages, setLanguages] = useState('english');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Privacy Policy',
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container}>
        <View style={styles.pickerRow}>
          <Icon type="materialicons" name="language" />
          <Picker
            selectedValue={languages}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setLanguages(itemValue)}>
            <Picker.Item label="English" value="english" />
            <Picker.Item label="Hindi" value="hindi" />
          </Picker>
        </View>
        <Text style={styles.greyText}>Last modified 12 may 2019</Text>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>1. Loriem Ipsum</Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>2. Loriem Ipsum</Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.smallText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
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
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  picker: {height: 50, width: 120},
  greyText: {
    alignSelf: 'flex-end',
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
    marginRight: 10,
  },
  heading: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: 10,
    padding: 20,
  },
  smallText: {
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default PrivacyPolicy;
