import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AddIcon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../constants/Colors';

const AddCreditsScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={styles.linearGradient}>
        <View style={styles.mainContent}>
          <AddIcon name="ios-add-circle-outline" size={50} color="white" />
          <Text style={styles.thankText}>Add More Credits</Text>
          <Text style={styles.smallText}>
            OODZEE credits can be used for purchasing food {'\n'}in the app. f
            you have a campaign code, tap + above{'\n'} and either it to redeem
            your credits.
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    elevation: 6,
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeText: {
    color: '#ffffff',
    lineHeight: 45,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  bottomContent: {
    alignItems: 'center',
    bottom: 30,
    justifyContent: 'center',
  },
  thankText: {
    color: '#ffffff',
    lineHeight: 21,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins',
    letterSpacing: 2,
    textTransform: 'uppercase',
    bottom: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  gradient: {
    width: 310,
    height: 44,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.secondaryGradient,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
  },
  smallText: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: 'white',
  },
});

export default AddCreditsScreen;
