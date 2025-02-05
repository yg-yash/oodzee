import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import NextIcon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import fonts from '../../constants/fonts';

const slides = [
  {
    key: 1,
    title: 'DELICIOUS UNSOLD FOOD',
    text:
      "The Majority of food in OODZEE is made the same\n day.it's given a second chance.but it's delicious",
    backgroundColor: '#F56164',
  },
  {
    key: 2,
    title: "TODAY'S LUNCH FOR DINNER?",
    text:
      'You will find the most food in the app after lunch.\n  Take a look in the app around 3pm to see \n                 what is offered near you!',

    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'PICK UP AS TAKE-AWAY',
    text:
      'With our safe payments you make your order directly\n   in the app and pick up the food as take away \n     by showing your mobile order to the staff!',
    backgroundColor: '#22bcb5',
  },
];

export default ({setShowRealApp}) => {
  const _renderItem = ({item}) => {
    return (
      <LinearGradient
        start={{x: 0, y: 0.6}}
        end={{x: 0, y: 0}}
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={styles.linearGradient}>
        <View
          style={[
            styles.slide,
            {marginTop: item.key === 3 ? hp('61%') : hp('40%')},
          ]}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
          {item.key !== 3 && (
            <View style={styles.paginationContainer}>
              <View
                style={[
                  styles.pagination,
                  {opacity: item.key === 1 ? 1 : 0.25},
                ]}
              />
              <View
                style={[
                  styles.pagination,
                  {opacity: item.key === 2 ? 1 : 0.25},
                ]}
              />
              <View
                style={[
                  styles.pagination,
                  {opacity: item.key === 3 ? 1 : 0.25},
                ]}
              />
            </View>
          )}
        </View>

        {item.key === 3 && (
          <View style={styles.slideThreeContent}>
            <Icon name="check-circle" color="white" size={hp('7')} />
            <Text style={styles.allSetText}>ALL SET !</Text>

            <Text onPress={() => setShowRealApp(true)} style={styles.start}>
              Start Now
            </Text>
          </View>
        )}
      </LinearGradient>
    );
  };

  const renderNextButton = () => (
    <Text style={styles.nextButton}>
      Next
      <NextIcon name="navigate-next" />
    </Text>
  );

  const renderSkipButton = () => (
    <View style={styles.skipContainer}>
      <Text style={styles.skipText}>Skip</Text>
    </View>
  );

  return (
    <>
      <LinearGradient
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
      <AppIntroSlider
        data={slides}
        keyExtractor={item => item.key.toString()}
        renderItem={_renderItem}
        dotClickEnabled={false}
        dotStyle={{opacity: 0}}
        activeDotStyle={{opacity: 0}}
        showSkipButton={true}
        showDoneButton={false}
        renderNextButton={renderNextButton}
        renderSkipButton={renderSkipButton}
      />
    </>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: fonts.FONT_BOLD,
    fontSize: 14,
    lineHeight: 21,
  },
  text: {
    fontFamily: fonts.FONT_REGULAR,
    color: 'white',
    marginTop: 10,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
  nextButton: {
    color: 'white',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 10,
    fontFamily: fonts.FONT_REGULAR,
  },
  slideThreeContent: {
    flex: 1,
    alignItems: 'center',
  },
  skipContainer: {
    flex: 1,
  },
  skipText: {
    color: 'white',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 10,
    fontFamily: fonts.FONT_REGULAR,
    opacity: 0.5,
  },
  allSetText: {
    marginTop: 5,
    fontSize: 18,
    lineHeight: 27,
    color: 'white',
    marginBottom: 13,
    fontFamily: fonts.FONT_REGULAR,
  },
  paginationContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'center',
  },
  pagination: {
    width: 35,
    height: 4,
    backgroundColor: 'white',
    borderRadius: 3,
    marginHorizontal: 5,
  },
  start: {
    fontSize: 22,
    lineHeight: 33,
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    fontFamily: fonts.FONT_REGULAR,
  },
});
