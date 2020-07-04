import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from 'react-native-elements';
import PasswordIcon from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';

const DeleteUserScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => setShowPassword(value => !value);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Delete User',
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Want to remove your account?</Text>
        <Text style={styles.subTitle}>
          Remove your account and all your data. This action can not be undone.
        </Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <PasswordIcon name="lock" size={18} style={styles.inputLogo} />
            <TextInput
              value={password}
              placeholder="Enter your password"
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry={showPassword}
            />
            {showPassword ? (
              <TouchableWithoutFeedback onPress={showPasswordHandler}>
                <Icon
                  name="eye-off"
                  type="feather"
                  size={20}
                  color="#999999"
                  style={styles.passwordIcon}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={showPasswordHandler}>
                <Icon
                  name="eye"
                  type="feather"
                  size={20}
                  color="#999999"
                  style={styles.passwordIcon}
                />
              </TouchableWithoutFeedback>
            )}
          </View>
        </View>
        <LinearGradient
          start={{x: 0.5, y: 0.5}}
          end={{x: 1, y: 0}}
          colors={[Colors.primaryGradient, Colors.secondaryGradient]}
          style={styles.gradient}>
          <Text style={styles.btnText}>Remove</Text>
        </LinearGradient>
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
    elevation: 16,
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
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
  },
  subTitle: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#535151',
  },
  form: {
    marginTop: 100,
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
  },
  gradient: {
    marginTop: 10,
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
  removeText: {
    marginTop: 20,
  },
  passwordIcon: {marginRight: 10},
});

export default DeleteUserScreen;
