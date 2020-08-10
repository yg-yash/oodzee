import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';
import {Icon} from 'react-native-elements';

const CreditsScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontFamily: fonts.FONT_REGULAR,
        fontSize: 20,
        lineHeight: 30,
      },
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <LinearGradient
        start={{x: 0.5, y: 0.5}}
        end={{x: 1, y: 0}}
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={styles.linearGradient}>
        <View style={styles.mainContent}>
          <Image
            source={require('../../../../assets/images/credits.png')}
            resizeMode="contain"
            style={{width: 357, height: 341}}
          />
          <Icon
            type="antdesign"
            name="plus"
            raised
            size={20}
            color={Colors.primaryGradient}
            onPress={() => navigation.navigate('AddCredits')}
          />
          <Text style={styles.thankText}>Add More Credits</Text>
          <Text style={styles.smallText}>
            OODZEE credits can be used for purchasing food {'\n'}in the app. f
            you have a campaign code, tap + above{'\n'} and either it to redeem
            your credits.
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    overflow: 'hidden',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  mainContent: {
    flex: 1,

    alignItems: 'center',
  },
  placeText: {
    color: '#ffffff',
    lineHeight: 45,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  bottomContent: {
    alignItems: 'center',
    bottom: 30,
    justifyContent: 'center',
  },
  thankText: {
    color: '#ffffff',
    lineHeight: 21,
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
    bottom: 20,
    marginTop: 30,
    fontFamily: fonts.FONT_BOLD,
  },

  smallText: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: 'white',
    fontFamily: fonts.FONT_REGULAR,
  },
});

export default CreditsScreen;
