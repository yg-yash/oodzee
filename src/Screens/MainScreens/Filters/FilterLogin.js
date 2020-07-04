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
  Keyboard,
} from 'react-native';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import PasswordIcon from 'react-native-vector-icons/SimpleLineIcons';
import BackIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const FilterLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => setShowPassword(value => !value);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'left',
    });
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Login with OODZEE{'\n'}app credential
          </Text>
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <UserIcon name="user-o" size={18} style={styles.inputLogo} />
              <TextInput
                value={email}
                placeholder="Email address or Username"
                onChangeText={text => setEmail(text)}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <PasswordIcon name="lock" size={18} style={styles.inputLogo} />
              <TextInput
                value={password}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                style={[styles.input, {flex: 1}]}
                secureTextEntry={!showPassword}
              />
              {showPassword ? (
                <Icon
                  name="eye-off"
                  type="feather"
                  size={20}
                  color="#999999"
                  style={styles.passwordIcon}
                  onPress={showPasswordHandler}
                />
              ) : (
                <Icon
                  name="eye"
                  type="feather"
                  size={20}
                  color="#999999"
                  style={styles.passwordIcon}
                  onPress={showPasswordHandler}
                />
              )}
            </View>
            <View style={styles.forgotPasswordContainer}>
              <Text
                style={styles.forgotText}
                onPress={() => navigation.navigate('Forget')}>
                Forgot Password?
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('App')}>
              <LinearGradient
                start={{x: 0.5, y: 0.5}}
                end={{x: 1, y: 0}}
                colors={[Colors.primaryGradient, Colors.secondaryGradient]}
                style={styles.gradient}>
                <Text style={styles.btnText}>LOGIN</Text>
              </LinearGradient>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.joinContainer}>
            <Text style={styles.joinText}>Don't have an account yet?</Text>
            <Button
              title="Join Us"
              type="clear"
              onPress={() => navigation.navigate('SignUp')}
              titleStyle={styles.signUpBtn}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.termText}>
            By continuing, you agree to:{'\n'} OODZEE’s
            <Text style={styles.pinkText}>terams & conditions and</Text>
            <Text style={styles.pinkText}> privacy policy{'\n'}</Text>
            OODZEEITY
            <Text style={styles.pinkText}> tearms & conditions </Text>
            {'\n'} Discourse’s
            <Text style={styles.pinkText}> privacy policy</Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    paddingTop: 6,
    elevation: 20,
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
  heading: {
    fontSize: 30,
    lineHeight: 45,
    textAlign: 'center',
  },
  form: {
    marginTop: 40,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 21,
    width: '100%',
    marginVertical: 10,
  },
  inputLogo: {
    marginLeft: 15,
    color: '#999999',
  },
  input: {
    marginLeft: '5%',
    color: '#999999',
  },
  signInText: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 0,
  },
  passwordIcon: {marginRight: 10},
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },

  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    right: 10,
    marginBottom: 10,
  },
  forgotText: {
    color: '#999999',
    fontSize: 12,
    lineHeight: 15,
  },
  gradient: {
    marginTop: 20,
    width: '100%',
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinContainer: {
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  joinText: {
    fontSize: 14,
    lineHeight: 18,

    fontFamily: 'Poppins-Regular',
  },
  signUpBtn: {
    color: Colors.primaryGradient,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
  bottomContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: 40,
  },
  termText: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
  pinkText: {
    color: Colors.primaryGradient,
  },
});

export default FilterLogin;
