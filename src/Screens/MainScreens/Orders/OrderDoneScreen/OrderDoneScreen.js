import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../constants/Colors';
import fonts from '../../../../constants/fonts';
import {Card, Icon} from 'react-native-elements';

const OrderDoneScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0.4}}
        end={{x: 0.2, y: 0}}
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={styles.linearGradient}>
        <View style={styles.centerContainer}>
          <Card containerStyle={styles.card}>
            <View style={styles.upperCardContainer}>
              <View style={styles.iconContainer}>
                <Icon
                  type={
                    Platform.OS === 'android' ? 'materialicons' : 'ionicons'
                  }
                  name={Platform.OS === 'android' ? 'close' : 'ios-close'}
                  color={Colors.primaryGradient}
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
    </SafeAreaView>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
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
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 20,
    lineHeight: 30,
  },
  recipeText: {
    fontFamily: fonts.FONT_REGULAR,
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
    fontFamily: fonts.FONT_REGULAR,
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
    fontFamily: fonts.FONT_REGULAR,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  submitText: {
    color: Colors.primaryGradient,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 2,
    fontFamily: fonts.FONT_BOLD,
  },
});

export default OrderDoneScreen;
