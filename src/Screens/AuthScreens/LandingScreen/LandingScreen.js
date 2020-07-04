import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';
import {Button} from 'react-native-elements';

export default function LandingScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.primaryGradient} />
      <LinearGradient
        start={{x: 0, y: 0.4}}
        end={{x: 0.2, y: 0}}
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={styles.linearGradient}>
        <View style={styles.card}>
          <Image
            source={require('../../../../assests/images/8.png')}
            style={styles.backgroundImage}
          />
        </View>
      </LinearGradient>
      <View style={styles.content}>
        <Text style={styles.text}>
          Part of the secret of success in life is to eat what you want to like
          and let the food fight it out inside
        </Text>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
          <View style={styles.joinBtn}>
            <Text style={styles.titleStyle}>Join Us !</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.signUp}>
          <Text style={styles.joinText}>Already Joined?</Text>
          <Button
            title="Sign in"
            type="clear"
            titleStyle={styles.signUpBtn}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  card: {
    marginTop: 0,
    marginHorizontal: 0,
    height: Dimensions.get('window').height / 1.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: 300,
    height: 300,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinBtn: {
    marginTop: 30,
    width: 220,
    height: 50,
    borderRadius: 50,
    borderColor: Colors.primaryGradient,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: 'black',
    letterSpacing: 3,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    lineHeight: 21,
    textAlign: 'center',
  },
  signUp: {
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
    color: Colors.primaryGradient,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
  text: {
    marginHorizontal: 60,
    color: '#999999',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
});
