import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import MailIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';

const EditProfileScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Edit Profile',
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Avatar
          containerStyle={styles.avatarContainer}
          rounded
          size={150}
          source={require('../../../../assests/images/usericon2.png')}
          showAccessory
        />
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <UserIcon name="user-o" size={18} style={styles.inputLogo} />
            <TextInput
              value={email}
              placeholder="Name"
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <MailIcon name="mail" size={18} style={styles.inputLogo} />
            <TextInput
              value={username}
              placeholder="Email address"
              onChangeText={text => setUsername(text)}
              style={styles.input}
            />
          </View>
        </View>
        <LinearGradient
          start={{x: 0.5, y: 0.5}}
          end={{x: 1, y: 0}}
          colors={[Colors.primaryGradient, Colors.secondaryGradient]}
          style={styles.gradient}>
          <Text style={styles.btnText}>Save</Text>
        </LinearGradient>
        <TouchableOpacity
          underlayColor={Colors.underlaylightColor}
          onPress={() => navigation.navigate('DeleteUser')}>
          <Text style={styles.removeText}>Want to remove your account?</Text>
        </TouchableOpacity>
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
  avatarContainer: {
    marginTop: 30,
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
});

export default EditProfileScreen;
