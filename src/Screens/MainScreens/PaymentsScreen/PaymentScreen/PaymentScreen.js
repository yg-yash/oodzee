import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../../constants/Colors';
import fonts from '../../../../constants/fonts';
import LinearGradient from 'react-native-linear-gradient';

const PaymentScreen = ({navigation}) => {
  const [promoCode, setPomoCode] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Payment',
      headerTitleStyle: {
        fontFamily: fonts.FONT_REGULAR,
        fontSize: 20,
        lineHeight: 30,
      },
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <ScrollView sttle={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.titleRow}>
            <Text style={styles.paymentText}>Payment Information</Text>
            <View style={styles.editRow}>
              <Icon type="feather" name="edit" size={12} />
              <Text style={styles.editText}>Edit</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../../../../../assets/images/mastercard.png')}
              style={styles.cardLogo}
            />
            <View>
              <Text style={styles.cardHolderText}>Card holder</Text>
              <Text style={styles.cardHolderText}>Master card ending **80</Text>
            </View>
          </View>
          <View style={styles.promoContainer}>
            <Text style={styles.promoText}>Use promo code</Text>
            <TextInput
              placeholder="Enter your code"
              style={styles.input}
              value={promoCode}
              onChangeText={value => setPomoCode(value)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('ThankYou')}>
            <LinearGradient
              start={{x: 0.5, y: 0.5}}
              end={{x: 1, y: 0}}
              colors={[Colors.primaryGradient, Colors.secondaryGradient]}
              style={styles.gradient}>
              <Text style={styles.btnText}>Pay</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
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
    paddingTop: 6,
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
    paddingVertical: '10%',
    paddingHorizontal: '7%',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentText: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: fonts.FONT_REGULAR,
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 3,
    fontFamily: fonts.FONT_REGULAR,
  },
  card: {
    marginTop: '7%',
    width: '100%',
    height: 95,
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    flexDirection: 'row',
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
  cardLogo: {
    width: 54,
    height: 54,
    marginLeft: 20,
  },
  cardHolderText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#535151',
    marginLeft: 20,
    fontFamily: fonts.FONT_REGULAR,
  },
  promoContainer: {
    marginTop: '13%',
  },
  promoText: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: fonts.FONT_REGULAR,
  },
  input: {
    borderBottomWidth: 1,
    color: '#999999',
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 12,
    lineHeight: 18,
  },
  gradient: {
    width: '90%',
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.FONT_BOLD,
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '100%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    marginHorizontal: 20,
  },
});

export default PaymentScreen;
