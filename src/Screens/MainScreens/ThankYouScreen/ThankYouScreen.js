import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../constants/Colors';

const ThankYouScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={[Colors.primaryGradient, Colors.secondaryGradient]}
      style={styles.linearGradient}>
      <View style={styles.mainContent}>
        <Icon name="check-circle" color="white" size={100} />
        <Text style={styles.placeText}>Your order placed successfully.</Text>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.thankText}>Thank You!</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('OrderStatus')}>
          <View style={styles.gradient}>
            <Text style={styles.btnText}>continue shopping</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
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
    lineHeight: 45,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins',
    letterSpacing: 2,
    textTransform: 'uppercase',
    bottom: 20,
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
});

export default ThankYouScreen;
