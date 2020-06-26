import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../../constants/Colors';
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
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View>
          <ImageBackground
            style={styles.image}
            resizeMethod="scale"
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            }}
          />
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
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('PaymentData')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Colors.secondaryGradient, Colors.primaryGradient]}
            style={styles.gradient}>
            <View style={{flexDirection: 'row'}}>
              {/* <Text style={[styles.btnText, {fontSize: 20}]}>+</Text> */}
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    marginTop: 5,
  },
  imageContainer: {
    height: Dimensions.get('screen').height / 3.2,
    borderRadius: 10,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '35%',
    // height: '100%',
  },
  innerContainer: {
    backgroundColor: 'white',
    paddingVertical: '10%',
    paddingHorizontal: '7%',
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
  },
  headingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 20,
    lineHeight: 30,
  },
  rupeeText: {
    fontSize: 20,
    lineHeight: 30,
    textTransform: 'uppercase',
    color: Colors.secondaryGradient,
  },
  smallText: {
    marginTop: '3%',
    fontSize: 12,
    lineHeight: 18,
    textTransform: 'uppercase',
    color: '#999999',
  },
  rating: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 14,
    lineHeight: 21,
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
    borderColor: Colors.secondaryGradient,
    marginBottom: '2%',
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '100%',
    elevation: 6,
    left: 0,
    right: 0,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    marginHorizontal: 20,
  },
  gradient: {
    width: '90%',
    height: 50,
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
});

export default FoodDetail;
