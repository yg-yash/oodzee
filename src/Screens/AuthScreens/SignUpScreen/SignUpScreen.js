import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';

import UserIcon from 'react-native-vector-icons/FontAwesome';
import PasswordIcon from 'react-native-vector-icons/SimpleLineIcons';
import BackIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import {Button, CheckBox} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termCheck, setTermCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => setShowPassword(value => !value);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <StatusBar backgroundColor={Colors.secondaryGradient} />
        <View style={styles.logoContainer}>
          <View style={styles.backButtonContainer}>
            <Button
              type="clear"
              title="Back"
              titleStyle={styles.backText}
              buttonStyle={styles.backButton}
              onPress={() => navigation.goBack()}
              icon={
                <BackIcon
                  name="ios-arrow-back"
                  color="#999999"
                  style={{marginHorizontal: 10, marginTop: 2}}
                />
              }
            />
          </View>
          <Image
            source={require('../../../../assests/images/8.png')}
            style={styles.logoImage}
            resizeMode={'center'}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.signInText}>Sign Up</Text>
          <Text style={styles.secondaryText}>
            to join us for a great experience
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <UserIcon name="user-o" size={18} style={styles.inputLogo} />
            <TextInput
              value={name}
              placeholder="What is your name?"
              onChangeText={text => setName(text)}
              style={styles.input}
            />
          </View>
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
          <View style={styles.termCheckContainer}>
            <CheckBox
              checked={termCheck}
              checkedColor={Colors.secondaryGradient}
              onPress={() => setTermCheck(value => !value)}
            />
            <Text style={{alignSelf: 'center'}}>
              I agree to terms and conditions
            </Text>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.secondaryGradient, Colors.primaryGradient]}
            style={styles.gradient}>
            <Text style={styles.btnText}>Here We Go !</Text>
          </LinearGradient>
          <View style={styles.orContainer}>
            <Text>OR</Text>
          </View>
          <View style={styles.socialMediaContainer}>
            <Text style={styles.socialText}>Sign up with</Text>
            <View style={styles.socialMediaLogosContainer}>
              <Image
                style={styles.socialMediaLogos}
                source={require('../../../../assests/images/google.png')}
              />
              <Image
                style={styles.socialMediaLogos}
                source={require('../../../../assests/images/facebook.png')}
              />
              <Image
                style={styles.socialMediaLogos}
                source={require('../../../../assests/images/linkedin.png')}
              />
            </View>
          </View>
          <View style={styles.joinContainer}>
            <Text style={styles.joinText}>Already Joined?</Text>
            <Button
              title="Sign In"
              type="clear"
              titleStyle={styles.signUpBtn}
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: '#999999',
    fontSize: 12,
  },
  backButton: {},
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    width: '50%',
    height: '100%',
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    left: '10%',
    marginVertical: '10%',
  },
  gradient: {
    width: '90%',
    height: '10%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 2,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 21,
    width: '89%',
    marginVertical: 10,
  },
  inputLogo: {
    marginLeft: '10%',
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
  joinBtn: {
    marginTop: 30,
    textAlign: 'center',
    width: '100%',
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
  },
  titleStyle: {
    textAlign: 'center',
    color: 'white',
    letterSpacing: 3,
  },
  circleGradient: {
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#008f68',
    fontSize: 12,
  },
  termCheckContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: '8%',
  },
  forgotText: {
    color: '#999999',
    fontSize: 12,
    lineHeight: 15,
  },
  orContainer: {
    marginVertical: 15,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialMediaLogosContainer: {
    marginLeft: 5,
    width: 24,
    height: 24,
    flexDirection: 'row',
  },
  socialMediaLogos: {
    width: '100%',
    height: '100%',
    marginHorizontal: 4,
  },
  socialText: {
    fontSize: 14,
    lineHeight: 18,
  },
  joinContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    bottom: 10,
  },
  joinText: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
  signUpBtn: {
    color: Colors.secondaryGradient,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
});

export default SignUpScreen;
