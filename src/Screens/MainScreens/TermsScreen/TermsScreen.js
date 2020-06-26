import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {Button, CheckBox} from 'react-native-elements';
import Colors from '../../../constants/Colors';

const TermScreen = ({navigation}) => {
  const [termCheck, setTermCheck] = useState(false);
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
                  style={styles.backIcon}
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
        <View style={styles.mainContent}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Terms of service</Text>
            <Text style={styles.secondaryText}>
              Please confirm that you agree to our Terms of Service and Privacy
              policy:
            </Text>
          </View>
          <View style={styles.termCheckContainer}>
            <CheckBox
              checked={termCheck}
              checkedColor={Colors.secondaryGradient}
              onPress={() => setTermCheck(value => !value)}
            />
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Text style={styles.agreeText}>I agree to the </Text>
              <Text
                style={[
                  styles.agreeText,
                  styles.gradientText,
                ]}>{`Terms & Conditions `}</Text>
              <Text style={styles.agreeText}>and the </Text>
              <Text style={[styles.agreeText, styles.gradientText]}>
                Privacy Policy
              </Text>
            </View>
          </View>
          <TouchableWithoutFeedback
            disabled={!termCheck}
            onPress={() => navigation.navigate('Dashboard')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[Colors.secondaryGradient, Colors.primaryGradient]}
              style={styles.gradient}>
              <Text style={styles.btnText}>Approve</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
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
    fontWeight: 'bold',
    marginBottom: 5,
  },
  secondaryText: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16,
    lineHeight: 24,
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
  },
  gradient: {
    width: '90%',
    height: '10%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  gradientText: {
    color: Colors.secondaryGradient,
  },
});

export default TermScreen;
