import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import fonts from '../../../../constants/fonts';

const OrderDetailsScreen = ({navigation}) => {
  const [like, setLike] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'Order Summary',
      headerTitleStyle: {
        fontFamily: fonts.FONT_REGULAR,
        fontSize: 20,
        lineHeight: 30,
      },
    });
  }, [navigation]);

  const toggleLike = () => setLike(value => !value);

  return (
    <View style={styles.screen}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.firstRow}>
            <View style={styles.upperCard}>
              <Text style={styles.foodNameText}>Draggen Burger</Text>
              {like ? (
                <Icon
                  type="antdesign"
                  name="heart"
                  size={25}
                  color="red"
                  onPress={() => toggleLike()}
                />
              ) : (
                <Icon
                  type="antdesign"
                  name="hearto"
                  size={25}
                  color="#999999"
                  onPress={() => toggleLike()}
                />
              )}
            </View>
            <Text style={styles.address}>
              Address line 1, Landmark, Nr. lorem ipsum,{'\n'}opp, dolor si
              amet, Vegas
            </Text>

            <View style={styles.orderStatus}>
              <Icon
                type="feather"
                name="check-circle"
                color="#21923A"
                size={18}
              />
              <Text style={styles.orderStatusText}>
                This order with Draggen Burger was delivered.
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.orderRatingText}>Order Rating</Text>
              <View style={styles.rating}>
                <Text style={styles.ratingText}>4.0</Text>
                <View style={styles.ratingIcons}>
                  <Icon
                    type="antdesign"
                    name="star"
                    color={'#FFC107'}
                    size={10}
                  />
                  <Icon
                    type="antdesign"
                    name="star"
                    color={'#FFC107'}
                    size={10}
                  />
                  <Icon
                    type="antdesign"
                    name="star"
                    color={'#FFC107'}
                    size={10}
                  />
                  <Icon
                    type="antdesign"
                    name="star"
                    color={'#FFC107'}
                    size={10}
                  />
                  <Icon
                    type="antdesign"
                    name="staro"
                    color={'#FFC107'}
                    size={10}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.secondFirstRow}>
            <Text style={styles.yourOrderText}>Your Order</Text>
            <View style={styles.row}>
              <View style={styles.rowtwo}>
                <Text style={styles.itemText}>Draggen Burger</Text>
              </View>
              <Text style={styles.price}>2 X ₹ 450</Text>
            </View>
            <View style={{marginTop: 3}}>
              <Text style={styles.price}>₹900</Text>
            </View>
          </View>
          <View style={styles.secondFirstRow}>
            <View style={styles.row}>
              <Text style={styles.greyText}>Item total</Text>
              <Text style={styles.price}>₹ 900.00</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.greyText}>Promo - [oodzeeSpe]</Text>
              <Text style={styles.price}>₹ 100.00</Text>
            </View>
            <View style={[styles.row, styles.bottomBorder]}>
              <Text style={styles.greyText}>Delivery Charge</Text>
              <Text style={styles.price}>₹ 10.00</Text>
            </View>
            <View style={styles.marginUp}>
              <Text style={styles.price}>Total {'  '}₹ 800.00</Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={styles.price}>Your Total Saving {'  '}₹ 800.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.yourOrderText}>Order Details</Text>
          <View style={styles.row}>
            <Text style={styles.greyText}>Order Number</Text>
            <Text style={styles.price}>1050203056</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.greyText}>Payment</Text>
            <Text style={styles.price}>Paid : Using Gpay</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.greyText}>Date</Text>
            <Text style={styles.price}>28 Dec 2019 ar 05:00 PM</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.greyText}>Deliver To</Text>
            <Text style={styles.price}>
              Address line 1, Landmark, Nr. lorem ipsum,{'\n'} opp, dolor si
              amet, Vegas
            </Text>
          </View>
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
    borderTopEndRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  container: {
    padding: 20,
  },
  firstRow: {},
  upperCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodNameText: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.FONT_BOLD,
  },
  address: {
    fontSize: 14,
    lineHeight: 21,
    color: '#999999',
    marginTop: 10,
    fontFamily: fonts.FONT_REGULAR,
  },
  orderStatus: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  orderStatusText: {
    marginLeft: 6,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
  },
  rating: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.FONT_REGULAR,
  },
  ratingIcons: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    height: '100%',
  },
  orderRatingText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.FONT_REGULAR,
  },
  ratingContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    backgroundColor: 'rgba(153, 153, 153, 0.1)',
  },
  secondFirstRow: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: 'rgba(153, 153, 153, 0.2)',
  },

  yourOrderText: {
    fontSize: 16,
    fontFamily: fonts.FONT_BOLD,
    lineHeight: 24,
  },
  itemText: {
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 14,
    lineHeight: 21,
  },
  icon: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  row: {
    paddingVertical: 3,
    marginVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowtwo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'right',
    fontFamily: fonts.FONT_REGULAR,
  },
  marginUp: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(153, 153, 153, 0.2)',
  },
  greyText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#535151',
    fontFamily: fonts.FONT_REGULAR,
  },
  bottomBorder: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(153, 153, 153, 0.2)',
  },
  thirdContainer: {
    padding: 20,
  },
  addressText: {
    backgroundColor: 'red',
  },
});

export default OrderDetailsScreen;
