import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MonthPicker from 'react-native-month-year-picker';
import Colors from '../../../constants/Colors';
import ShieldCheck from 'react-native-vector-icons/MaterialCommunityIcons';
import PasswordIcon from 'react-native-vector-icons/SimpleLineIcons';

const UserAddPaymentMethodScreen = ({navigation}) => {
  const today = new Date();
  const [cardInput, setCardInput] = useState();
  const [month, setMonth] = useState('Month');
  const [year, setYear] = useState('Year');
  const [cvv, setCvv] = useState();
  const [cardHolderName, setcardHolderName] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const showPicker = value => setShowDatePicker(value);

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
      headerTitle: 'Payment Methods',
    });
  }, [navigation]);

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
        </View>
        {/* Add Naavigation  to this  */}
        <TouchableWithoutFeedback>
          <LinearGradient
            start={{x: 0.5, y: 0.5}}
            end={{x: 1, y: 0}}
            colors={[Colors.primaryGradient, Colors.secondaryGradient]}
            style={styles.gradient}>
            <Text style={styles.btnText}>confirm</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
        <View style={styles.icons}>
          <ShieldCheck name="shield-check-outline" color="#226D21" size={25} />
          <PasswordIcon
            name="lock"
            size={25}
            style={{marginLeft: 10}}
            color="#999999"
          />
        </View>
        <View>
          <Text style={styles.text}>
            All payments are passed by our certified payment service. Stripe,
            which means that OODZEE does not save an of your sensitive
            information.
          </Text>
          <Text style={styles.pinkText}>
            Read more about OODZEE’s payment security here.
          </Text>
        </View>
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
  gradient: {
    marginTop: 30,
    width: '100%',
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

  icons: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: '#999999',
  },
  pinkText: {
    marginTop: 20,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primaryGradient,
  },
});

export default UserAddPaymentMethodScreen;
