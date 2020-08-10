import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import MailIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';

const EditProfileScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Edit Profile',
      headerTitleStyle: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: fonts.FONT_REGULAR,
      },
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <Avatar
              containerStyle={styles.avatarContainer}
              rounded
              size={150}
              source={require('../../../../assets/images/usericon2.png')}
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
              <Text style={styles.removeText}>
                Want to remove your account?
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
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
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
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
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
  },
});

export default EditProfileScreen;
