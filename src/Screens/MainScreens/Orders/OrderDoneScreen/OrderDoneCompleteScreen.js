import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../constants/Colors';
import fonts from '../../../../constants/fonts';
import {Card, Icon} from 'react-native-elements';
import CheckIcon from 'react-native-vector-icons/Feather';

const OrderStatusScreen = ({navigation}) => {
  const [feedbackText, setFeedbackText] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0.4}}
        end={{x: 0.2, y: 0}}
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={styles.linearGradient}>
        <View style={styles.centerContainer}>
          <Card containerStyle={styles.card}>
            <View style={styles.upperCardContainer}>
              <View style={styles.iconContainer}>
                <Icon
                  type={
                    Platform.OS === 'android' ? 'materialicons' : 'ionicons'
                  }
                  name={Platform.OS === 'android' ? 'close' : 'ios-close'}
                  color={Colors.primaryGradient}
                  size={20}
                  onPress={() => navigation.popToTop()}
                />
              </View>
              <View style={styles.mainContaier}>
                <View style={styles.firstContent}>
                  <Text style={styles.itemText}>Draggen Burger</Text>
                  <Text style={styles.recipeText}>
                    Fresh bread, Capsicum, Tometo, Onion
                  </Text>
                  <View style={styles.midContent}>
                    <CheckIcon name="check-circle" color="green" size={50} />
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>Order picked</Text>
                      <Text style={styles.text}>Enjoy your food!</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.bottomContainer}>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.rateText}>Rate your food</Text>
                    <View style={styles.ratingIcons}>
                      <Icon type="antdesign" name="star" color={'#FFC107'} />
                      <Icon type="antdesign" name="star" color={'#FFC107'} />
                      <Icon type="antdesign" name="star" color={'#FFC107'} />
                      <Icon type="antdesign" name="star" color={'#FFC107'} />
                      <Icon type="antdesign" name="staro" color={'#FFC107'} />
                    </View>
                  </View>
                  <View style={styles.form}>
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={feedbackText}
                        placeholder="Give your feedback..."
                        onChangeText={text => setFeedbackText(text)}
                        style={styles.input}
                        multiline={true}
                        numberOfLines={4}
                        scrollEnabled
                      />
                    </View>
                    <TouchableWithoutFeedback
                      onPress={() => navigation.popToTop()}>
                      <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                          <Text style={styles.submitText}>SUBMIT</Text>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    height: Dimensions.get('screen').height / 1.45,
    borderRadius: 20,
    padding: 0,
    margin: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  upperCardContainer: {
    paddingTop: 7,
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignSelf: 'flex-end',
  },
  firstContent: {
    alignItems: 'center',
  },
  itemText: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 20,
    lineHeight: 30,
  },
  recipeText: {
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
  },
  midContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '17%',
  },
  textContainer: {
    marginTop: '5%',
  },
  text: {
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    color: '#535151',
    fontFamily: fonts.FONT_REGULAR,
  },
  bottomContainer: {
    marginTop: 15,
    alignItems: 'flex-start',
  },
  ratingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingIcons: {
    flexDirection: 'row',
    marginTop: '3%',
    marginLeft: '6%',
  },
  rateText: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: fonts.FONT_REGULAR,
  },
  form: {
    width: '100%',
    paddingHorizontal: '3%',
  },
  inputContainer: {
    backgroundColor: '#FAFAFA',
    borderRadius: 21,
    marginTop: '10%',
  },
  feedBackInput: {
    marginLeft: '5%',
    color: '#999999',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: '5%',
  },
  button: {
    height: 44,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  submitText: {
    color: Colors.primaryGradient,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 2,
    fontFamily: fonts.FONT_BOLD,
  },
  input: {
    height: 100,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
    paddingHorizontal: 10,
  },
});

export default OrderStatusScreen;
