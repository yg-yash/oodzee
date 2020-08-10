import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';

export default function LandingScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.screen}>
          <StatusBar backgroundColor={Colors.secondaryGradient} />
          <LinearGradient
            start={{x: 0, y: 0.4}}
            end={{x: 0.2, y: 0}}
            colors={[Colors.primaryGradient, Colors.secondaryGradient]}
            style={styles.linearGradient}>
            <View style={styles.card}>
              <Image
                source={require('../../../../assets/images/logowhite.png')}
                style={styles.backgroundImage}
              />
            </View>
          </LinearGradient>
          <View style={styles.content}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.text}>
                Part of the secret of success in life is to eat what you want to
                like and let the food fight it out inside
              </Text>

              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('SignUp')}>
                <View style={styles.joinBtn}>
                  <Text style={styles.titleStyle}>Join Us !</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.signUp}>
              <Text style={styles.joinText}>Already Joined?</Text>
              <TouchableHighlight
                underlayColor={Colors.secondaryGradient}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.signUpBtnText}> Sign In </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  linearGradient: {
    flex: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    elevation: 8,
    overflow: 'hidden',
    paddingBottom: 30,
  },
  card: {
    flex: 1,
    marginTop: 0,
    marginHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '50%',
    height: '30%',
  },
  content: {
    flex: 1,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinBtn: {
    marginTop: 20,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 5,
  },
  joinText: {
    fontSize: 12,
    lineHeight: 28,
    fontFamily: fonts.FONT_REGULAR,
  },
  signUpBtnText: {
    color: Colors.primaryGradient,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
  },
  text: {
    marginHorizontal: '15%',
    color: '#999999',
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
});
