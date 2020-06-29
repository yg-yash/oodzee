import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../constants/Colors';
import {Card, Icon} from 'react-native-elements';

const OrderDoneScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={[Colors.primaryGradient, Colors.secondaryGradient]}
      style={styles.linearGradient}>
      <View style={styles.centerContainer}>
        <Card containerStyle={styles.card}>
          <View style={styles.upperCardContainer}>
            <View style={styles.iconContainer}>
              <Icon
                type={Platform.OS === 'android' ? 'materialicons' : 'ionicons'}
                name={Platform.OS === 'android' ? 'close' : 'ios-close'}
                color={Colors.secondaryGradient}
                size={20}
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={styles.mainContaier}>
              <View style={styles.firstContent}>
                <Text style={styles.itemText}>Draggen Burger</Text>
                <Text style={styles.recipeText}>
                  Fresh bread, Capsicum, Tometo, Onion
                </Text>
              </View>
            </View>
            <View style={styles.otpContainer}>
              <Text style={styles.otpText}>Enter OTP</Text>
            </View>
            <View style={styles.otpInputContainer}>
              <TextInput
                style={styles.otpInput}
                placeholder="0"
                maxLength={1}
              />
              <TextInput style={styles.otpInput} placeholder="0" />
              <TextInput style={styles.otpInput} placeholder="0" />
              <TextInput style={styles.otpInput} placeholder="0" />
            </View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('OrderDoneComplete')}>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Text style={styles.submitText}>SUBMIT</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Card>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    height: Dimensions.get('screen').height / 2.2,
    borderRadius: 20,
    padding: 0,
    margin: 0,
  },
  upperCardContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignSelf: 'flex-end',
  },
  firstContent: {
    alignItems: 'center',
  },
  itemText: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 20,
    lineHeight: 30,
  },
  recipeText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
  },
  otpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 50,
  },
  otpText: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 12,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '30%',
    marginTop: 10,
  },
  otpInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#999999',
    fontSize: 14,
    lineHeight: 21,
  },
  buttonContainer: {
    marginTop: '20%',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    height: 44,
    borderRadius: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 30,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  submitText: {
    color: Colors.secondaryGradient,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});

export default OrderDoneScreen;
