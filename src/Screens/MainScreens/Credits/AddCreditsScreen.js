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
import fonts from '../../../constants/fonts';

const AddCreditsScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Credits',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontFamily: fonts.FONT_REGULAR,
        fontSize: 20,
        lineHeight: 30,
      },
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
    fontFamily: fonts.FONT_BOLD,
  },
  smallText: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    fontFamily: fonts.FONT_REGULAR,
  },
  input: {
    marginTop: 70,
    width: '70%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    fontSize: 12,
    lineHeight: 28,
    fontFamily: fonts.FONT_REGULAR,
  },
  buttonContainer: {
    marginTop: 30,
    width: 186,
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

export default AddCreditsScreen;
