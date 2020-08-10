import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import PasswordIcon from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';

const UnlockHiddenLocation = ({navigation}) => {
  const [code, setCode] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Payment Methods',
      headerTitleStyle: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: fonts.FONT_REGULAR,
      },
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.title}>Unlock hidden location</Text>
          <Text style={styles.subTitle}>
            If you’ve discovered a restaurent hidden to the public.Enter their
            OODZEE code here to unlock iin the app.
          </Text>
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <PasswordIcon name="lock" size={18} style={styles.inputLogo} />
              <TextInput
                value={code}
                placeholder="Code"
                onChangeText={text => setCode(text)}
                style={styles.input}
              />
            </View>
          </View>
          <LinearGradient
            start={{x: 0.5, y: 0.5}}
            end={{x: 1, y: 0}}
            colors={[Colors.primaryGradient, Colors.secondaryGradient]}
            style={styles.gradient}>
            <Text style={styles.btnText}>Unlock</Text>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
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
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#535151',
    fontFamily: fonts.FONT_REGULAR,
  },
  form: {
    marginTop: 30,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 21,

    marginVertical: 10,
  },
  inputLogo: {
    marginLeft: 15,
    color: '#999999',
  },
  input: {
    marginLeft: '5%',
    color: '#999999',
    flex: 1,
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 12,
    lineHeight: 18,
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
});

export default UnlockHiddenLocation;
