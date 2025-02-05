import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';
import LinearGradient from 'react-native-linear-gradient';

const FoodDetail = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <Icon
          type="antdesign"
          name="shoppingcart"
          size={25}
          style={{marginRight: 5}}
        />
      ),
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
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageBackground
              style={styles.image}
              resizeMode="cover"
              source={require('../../../../assets/images/burger.jpg')}>
              <Icon
                type="antdesign"
                name="hearto"
                color="white"
                size={25}
                style={{
                  marginTop: 20,
                  left: 20,
                  alignSelf: 'flex-start',
                }}
              />
            </ImageBackground>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.line} />
          <View style={styles.headingRow}>
            <Text style={styles.itemText}>Draggen Burger</Text>
            <Text style={styles.rupeeText}>₹ 450</Text>
          </View>
          <Text style={styles.smallText}>A One restaurent, Vegas</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>4.0</Text>
            <View style={styles.ratingIcons}>
              <Icon type="antdesign" name="star" color={'#FFC107'} size={10} />
              <Icon type="antdesign" name="star" color={'#FFC107'} size={10} />
              <Icon type="antdesign" name="star" color={'#FFC107'} size={10} />
              <Icon type="antdesign" name="star" color={'#FFC107'} size={10} />
              <Icon type="antdesign" name="staro" color={'#FFC107'} size={10} />
            </View>
          </View>
        </View>
        <View style={[styles.innerContainer, {borderBottomWidth: 0}]}>
          <Text style={[styles.smallText, {textTransform: 'none'}]}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
          <Text style={[styles.smallText, {textTransform: 'none'}]}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('PaymentData')}>
            <LinearGradient
              start={{x: 0.5, y: 0.5}}
              end={{x: 1, y: 0}}
              colors={[Colors.primaryGradient, Colors.secondaryGradient]}
              style={styles.gradient}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  type="MaterialIcons"
                  name="add"
                  color="white"
                  size={20}
                  style={{alignSelf: 'center'}}
                />
                <Text style={[styles.btnText, {marginLeft: '3%'}]}>
                  Add To Cart
                </Text>
              </View>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
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
  container: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
  imageContainer: {
    height: Dimensions.get('screen').height / 3.2,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    backgroundColor: 'white',
    paddingVertical: '10%',
    paddingHorizontal: '7%',
    borderBottomWidth: 1,
    borderBottomColor: ' rgba(153, 153, 153, 0.2)',
  },
  headingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: fonts.FONT_REGULAR,
  },
  rupeeText: {
    fontSize: 20,
    lineHeight: 30,
    textTransform: 'uppercase',
    color: Colors.secondaryGradient,
    fontFamily: fonts.FONT_REGULAR,
  },
  smallText: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 18,
    textTransform: 'uppercase',
    color: '#999999',
    fontFamily: fonts.FONT_REGULAR,
  },
  rating: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: fonts.FONT_REGULAR,
  },
  ratingIcons: {
    flexDirection: 'row',
    marginLeft: '2%',
    alignItems: 'center',
    height: '100%',
  },

  line: {
    borderWidth: 2,
    width: '10%',
    borderRadius: 5,
    borderColor: Colors.primaryGradient,
    marginBottom: '2%',
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '100%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    marginHorizontal: 20,
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
    color: 'white',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: fonts.FONT_BOLD,
  },
});

export default FoodDetail;
