import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';

const UserPaymentMethodScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Payment Methods',
      headerTitleStyle: {
        fontFamily: fonts.FONT_REGULAR,
      },
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Payment methods</Text>
        <Text style={styles.subTitle}>
          Add a new payment method by using the button below. Tap an existing
          method to remove it. Supported payment methods:
        </Text>
        <View style={styles.icons}>
          <Image
            source={require('../../../../assets/images/mastercard.png')}
            style={styles.cardLogo}
          />
          <Image
            source={require('../../../../assets/images/mastercard.png')}
            style={styles.cardLogo}
          />
          <Image
            source={require('../../../../assets/images/mastercard.png')}
            style={styles.cardLogo}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('UserAddPaymentMethods')}>
          <LinearGradient
            start={{x: 0.5, y: 0.5}}
            end={{x: 1, y: 0}}
            colors={[Colors.primaryGradient, Colors.secondaryGradient]}
            style={styles.gradient}>
            <Text style={styles.btnText}>add payment method</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
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
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.FONT_REGULAR,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: '#535151',
    fontFamily: fonts.FONT_REGULAR,
  },
  gradient: {
    marginTop: 10,
    width: '100%',
    height: 44,
    borderRadius: 50,
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
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.FONT_BOLD,
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  removeText: {
    marginTop: 20,
  },
  icons: {
    width: '80%',
    marginVertical: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLogo: {
    width: 54,
    height: 54,
    marginLeft: 20,
  },
});

export default UserPaymentMethodScreen;
