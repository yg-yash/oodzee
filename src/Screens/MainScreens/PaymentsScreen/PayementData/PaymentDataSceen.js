import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Switch,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import MonthPicker from 'react-native-month-year-picker';

const paymentMehods = ['Paypal', 'Wallet', 'Credit', 'Debit'];

const PaymentDataSceen = ({navigation}) => {
  const today = new Date();
  const [currentPaymentMethod, setcurrentPaymentMethod] = useState(
    paymentMehods[1],
  );
  const [cardInput, setCardInput] = useState();
  const [month, setMonth] = useState('Month');
  const [year, setYear] = useState('Year');
  const [cvv, setCvv] = useState();
  const [cardHolderName, setcardHolderName] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showPicker = value => setShowDatePicker(value);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onDateValueChange = (event, newDate) => {
    if (event === 'dismissedAction') {
      return showPicker(false);
    }
    const selectedDate = newDate || today;
    const monthAndYear = selectedDate.split('-');
    showPicker(false);
    setMonth(monthAndYear[0]);
    setYear(monthAndYear[1]);
  };

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
        <LinearGradient
          style={styles.currentbadges}
          start={{x: 0.5, y: 0.5}}
          end={{x: 1, y: 0}}
          colors={[Colors.primaryGradient, Colors.secondaryGradient]}>
          <View style={styles.badgeSelectedContainer}>
            <Text style={styles.badgeSelectedText}>{badgeName}</Text>
            <Icon type="antdesign" name="checkcircleo" color="white" />
          </View>
        </LinearGradient>
      ) : (
        <View style={styles.badges}>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{badgeName}</Text>

            <Icon
              type="antdesign"
              name="checkcircleo"
              color={'rgba(153, 153, 153, 0.2)'}
            />
          </View>
        </View>
      )}
    </>
  );
  return (
    <View style={styles.screen}>
      {showDatePicker && (
        <MonthPicker
          onChange={onDateValueChange}
          value={today}
          minimumDate={today}
          maximumDate={new Date(2025, 5)}
        />
      )}
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
                <Text
                  style={styles.validInput}
                  onPress={() => showPicker(true)}>
                  {month}
                </Text>

                <Text
                  style={styles.validInput}
                  onPress={() => showPicker(true)}>
                  {year}
                </Text>
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
            <Switch
              trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
              thumbColor={isEnabled ? Colors.primaryGradient : '#f4f3f4'}
              ios_backgroundColor="#E5E5E5"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Payment')}>
          <LinearGradient
            start={{x: 0.5, y: 0.5}}
            end={{x: 1, y: 0}}
            colors={[Colors.primaryGradient, Colors.secondaryGradient]}
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
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    paddingTop: 6,
    elevation: 6,
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    overflow: 'hidden',
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
    alignItems: 'center',
  },
  badgeSelectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badges: {
    width: 109,
    height: 50,
    backgroundColor: '#FAFAFA',
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  currentbadges: {
    width: 120,
    height: 50,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  badgeSelectedText: {
    fontSize: 12,
    lineHeight: 18,
    marginRight: 10,
    color: 'white',
    textAlign: 'center',
  },
  badgeText: {
    fontSize: 12,
    lineHeight: 18,
    marginRight: 10,
    color: '#999999',
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
    borderBottomColor: 'rgba(153, 153, 153, 0.2)',
    width: '24%',
    fontSize: 21,
    lineHeight: 30,
    letterSpacing: 5,
    textAlign: 'center',
    color: '#999999',
  },
  restInput: {
    marginLeft: 5,
  },
  validInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  validContainer: {
    marginTop: '5%',
  },
  validInput: {
    width: 60,
    fontSize: 14,
    lineHeight: 18,
    color: '#999999',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(153, 153, 153, 0.2)',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  cvvInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(153, 153, 153, 0.2)',
    fontSize: 20,
    width: '120%',
    color: '#999999',
    textAlign: 'center',
  },
  cardMoreDetails: {
    flexDirection: 'row',
  },
  cardHolderInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(153, 153, 153, 0.2)',
    fontSize: 12,
    lineHeight: 18,
    width: '100%',
    color: '#999999',
  },
  saveCard: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gradient: {
    width: '90%',
    height: 44,
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
    left: 0,
    right: 0,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    marginHorizontal: 20,
  },
});

export default PaymentDataSceen;
