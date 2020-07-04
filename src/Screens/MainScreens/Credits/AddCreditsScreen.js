import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';

const AddCreditsScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <LinearGradient
        start={{x: 0.5, y: 0.5}}
        end={{x: 1, y: 0}}
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={styles.linearGradient}>
        <View style={styles.mainContent}>
          <Text style={styles.addMore}>Add more credits !</Text>
          <Text style={styles.smallText}>
            Type a campaign to add credits to your account.{'\n'}Please note
            that the codes have special conditions and{'\n'} may only be
            redeemable once.
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="white"
            placeholder="Enter your code"
          />
          <TouchableWithoutFeedback>
            <View style={styles.buttonContainer}>
              <Text style={styles.btnText}>redeem now</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    elevation: 6,
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
  mainContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  addMore: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
  input: {
    marginTop: 70,
    width: 227,
    height: 50,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
  },
  buttonContainer: {
    marginTop: 30,
    width: 186,
    height: 44,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.primaryGradient,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
});

export default AddCreditsScreen;
