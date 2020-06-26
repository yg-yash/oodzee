import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const paymentMehods = ['Paypal', 'Wallet', 'Credit', 'Debit'];

const PaymentDataSceen = ({navigation}) => {
  const [currentPaymentMethod, setcurrentPaymentMethod] = useState('');
  const [cardInput, setCardInput] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cvv, setCvv] = useState();
  const [cardHolderName, setcardHolderName] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Payment Data',
    });
  }, [navigation]);

  const rendeBadge = badgeName => (
    <>
      {badgeName === currentPaymentMethod ? (
        <View style={styles.currentbadges}>
          <View style={styles.badgeSelectedContainer}>
            <Text style={styles.badgeSelectedText}>{badgeName}</Text>
            <Icon type="antdesign" name="checkcircleo" color="white" />
          </View>
        </View>
      ) : (
        <View style={styles.badges}>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{badgeName}</Text>
          </View>
        </View>
      )}
    </>
  );
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Text style={styles.amountText}>Total Amount</Text>
          <Text style={styles.rupeeText}>₹ 1900.00</Text>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.amountText}>Payment Method</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={paymentMehods}
            keyExtractor={(item, index) => item}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.badge}
                onPress={() => setcurrentPaymentMethod(item)}>
                {rendeBadge(item)}
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>Card number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={cardInput}
              style={styles.input}
              onChangeText={value => setCardInput(value)}
              placeholder="****"
            />
            <TextInput
              value={cardInput}
              style={[styles.input, styles.restInput]}
              onChangeText={value => setCardInput(value)}
              placeholder="****"
            />
            <TextInput
              value={cardInput}
              style={[styles.input, styles.restInput]}
              onChangeText={value => setCardInput(value)}
              placeholder="****"
            />
            <TextInput
              value={cardInput}
              style={[styles.input, styles.restInput]}
              onChangeText={value => setCardInput(value)}
              placeholder="****"
            />
          </View>
          <View style={styles.cardMoreDetails}>
            <View style={styles.validContainer}>
              <Text style={styles.cardText}>Valid until</Text>
              <View style={styles.validInputContainer}>
                <View style={styles.form}>
                  <TextInput
                    value={month}
                    style={styles.validInput}
                    onChangeText={value => setMonth(value)}
                    placeholder="Month"
                  />
                </View>
                <View style={styles.form}>
                  <TextInput
                    value={year}
                    style={styles.validInput}
                    onChangeText={value => setYear(value)}
                    placeholder="Year"
                  />
                </View>
              </View>
            </View>
            <View style={styles.validContainer}>
              <Text style={styles.cardText}>CVV</Text>
              <TextInput
                value={cvv}
                style={styles.cvvInput}
                onChangeText={value => setCvv(value)}
                placeholder="* * * *"
              />
            </View>
          </View>
          <View>
            <View style={styles.validContainer}>
              <Text style={styles.cardText}>Card Holder</Text>
              <TextInput
                value={cardHolderName}
                style={styles.cardHolderInput}
                onChangeText={value => setcardHolderName(value)}
                placeholder="Your name and surname"
              />
            </View>
          </View>
          <View style={styles.saveCard}>
            <Text style={styles.cardText}>
              Save card data for future payments
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Payment')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.secondaryGradient, Colors.primaryGradient]}
            style={styles.gradient}>
            <Text style={styles.btnText}>Proceed to confirm</Text>
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
  amountText: {
    fontSize: 14,
    lineHeight: 21,
  },
  rupeeText: {
    fontSize: 28,
    lineHeight: 32,
    color: '#E71989',
    fontWeight: 'bold',
  },
  paymentContainer: {
    marginVertical: '10%',
  },
  badge: {
    marginTop: '10%',
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: '4%',
  },
  badgeSelectedContainer: {
    flexDirection: 'row',
    marginTop: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badges: {
    width: 109,
    height: 44,
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  currentbadges: {
    width: 109,
    height: 44,
    backgroundColor: Colors.secondaryGradient,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  badgeSelectedText: {
    fontSize: 12,
    lineHeight: 18,
    marginRight: 10,
    color: 'white',
  },
  badgeText: {
    fontSize: 12,
    lineHeight: 18,
    marginRight: 10,
  },
  badgeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardText: {
    fontSize: 14,
    lineHeight: 21,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
    width: '24%',
    fontSize: 24,
    paddingLeft: '5%',
    color: '#999999',
  },
  restInput: {
    marginLeft: 5,
  },
  validInputContainer: {flexDirection: 'row'},
  validContainer: {
    marginTop: '5%',
  },
  validInput: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
    marginLeft: '10%',
  },
  cvvInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
    fontSize: 10,
    width: '120%',
    color: '#999999',
  },
  cardMoreDetails: {
    flexDirection: 'row',
  },
  cardHolderInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
    fontSize: 12,
    lineHeight: 18,
    width: '100%',
    color: '#999999',
  },
  saveCard: {
    marginTop: '10%',
  },
  gradient: {
    width: '90%',
    height: 60,
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

export default PaymentDataSceen;
