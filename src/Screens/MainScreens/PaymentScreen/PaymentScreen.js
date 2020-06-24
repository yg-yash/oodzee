import React from 'react';
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
import {Button} from 'react-native-elements';
import Colors from '../../../constants/Colors';

const PaymentScreen = ({navigation}) => {
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
          <View style={styles.cardTitle}>
            <Text style={styles.cardText}>Add your card</Text>
          </View>
          <Image
            source={require('../../../../assests/images/8.png')}
            style={styles.logoImage}
            resizeMode={'center'}
          />
        </View>
        <View style={styles.mainContent}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Great Items sell fast</Text>
            <Text style={styles.secondaryText}>
              All payments are passed by our certified payment service. Stripe,
              which means that OODZEE does not save an of your sensitive
              information.
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Payment')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={[Colors.secondaryGradient, Colors.primaryGradient]}
              style={styles.gradient}>
              <Text style={styles.btnText}>Add New Payment Method </Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
          <Text
            style={styles.skipBtn}
            onPress={() => navigation.navigate('Terms')}>
            Skip for now
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
  cardTitle: {
    top: '20%',
    marginBottom: 10,
  },
  backIcon: {marginHorizontal: 10, marginTop: 2},
  cardText: {
    fontSize: 18,
    color: '#222222',
    lineHeight: 27,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
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

  gradient: {
    width: '90%',
    height: '10%',
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
  skipBtn: {
    marginTop: '5%',
    color: '#999999',
    fontSize: 14,
    lineHeight: 21,
  },
});

export default PaymentScreen;
