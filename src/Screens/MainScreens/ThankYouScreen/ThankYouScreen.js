import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';

const ThankYouScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0.4}}
        end={{x: 0.2, y: 0}}
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={styles.linearGradient}>
        <View style={styles.mainContent}>
          <Icon name="check-circle" color="white" size={100} />
          <Text style={styles.placeText}>Your order placed successfully.</Text>
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.thankText}>Thank You!</Text>
          <TouchableWithoutFeedback onPress={() => navigation.popToTop()}>
            <View style={styles.gradient}>
              <Text style={styles.btnText}>continue shopping</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </LinearGradient>
    </SafeAreaView>
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
    fontFamily: fonts.FONT_REGULAR,
  },
  bottomContent: {
    alignItems: 'center',
    bottom: 30,
    justifyContent: 'center',
  },
  thankText: {
    color: '#ffffff',
    lineHeight: 36,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: fonts.FONT_REGULAR,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  btnText: {
    color: Colors.primaryGradient,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: fonts.FONT_BOLD,
  },
});

export default ThankYouScreen;
