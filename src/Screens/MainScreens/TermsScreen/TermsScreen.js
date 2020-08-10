import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {Button, CheckBox} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';

const TermScreen = ({navigation}) => {
  const [termCheck, setTermCheck] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.screen}>
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
                    style={styles.backIcon}
                  />
                }
              />
            </View>

            <Image
              source={require('../../../../assets/images/8.png')}
              style={styles.logoImage}
              resizeMode={'center'}
            />
          </View>
          <View style={styles.mainContent}>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>Terms of service</Text>
              <Text style={styles.secondaryText}>
                Please confirm that you agree to our Terms of Service and
                Privacy policy:
              </Text>
            </View>
            <View style={styles.termCheckContainer}>
              <CheckBox
                checked={termCheck}
                checkedColor={Colors.primaryGradient}
                onPress={() => setTermCheck(value => !value)}
              />
              <View style={{}}>
                <Text style={styles.agreeText}>
                  I agree to the{' '}
                  <Text
                    style={
                      styles.gradientText
                    }>{`Terms & Conditions `}</Text>{' '}
                  and the{'\n'}
                  <Text style={styles.gradientText}>{`Privacy Policy`}</Text>
                </Text>
              </View>
            </View>
            <TouchableWithoutFeedback
              disabled={!termCheck}
              onPress={() => navigation.navigate('Dashboard')}>
              <LinearGradient
                start={{x: 0.5, y: 0.5}}
                end={{x: 1, y: 0}}
                colors={[Colors.primaryGradient, Colors.secondaryGradient]}
                style={styles.gradient}>
                <Text style={styles.btnText}>Approve</Text>
              </LinearGradient>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
  },

  backIcon: {marginHorizontal: 10, marginTop: 2},

  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },

  logoImage: {
    width: '50%',
    height: '100%',
  },
  mainContent: {
    flex: 1,

    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainText: {
    fontSize: 18,
    lineHeight: 27,

    fontFamily: fonts.FONT_BOLD,
    marginBottom: 5,
  },
  secondaryText: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.FONT_REGULAR,
  },
  termCheckContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: '10%',
    marginLeft: '5%',
  },
  agreeText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
  },
  gradient: {
    width: '90%',
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: fonts.FONT_BOLD,
  },
  gradientText: {
    color: Colors.primaryGradient,
  },
});

export default TermScreen;
