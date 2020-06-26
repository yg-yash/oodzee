import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const PaymentScreen = ({navigation}) => {
  const [promoCode, setPomoCode] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Payment',
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
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
            source={require('../../../../../assests/images/mastercard.png')}
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
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.secondaryGradient, Colors.primaryGradient]}
            style={styles.gradient}>
            <Text style={styles.btnText}>Pay</Text>
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
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 3,
  },
  card: {
    marginTop: '7%',
    width: '100%',
    height: 95,
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  promoContainer: {
    marginTop: '13%',
  },
  promoText: {
    fontSize: 14,
    lineHeight: 21,
  },
  input: {
    borderBottomWidth: 1,
    color: '#999999',
  },
  gradient: {
    width: '90%',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '100%',
    elevation: 6,
    left: 0,
    right: 0,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    marginHorizontal: 20,
  },
});

export default PaymentScreen;
