import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../../constants/Colors';
import fonts from '../../../../constants/fonts';
import {Icon, Card} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';

const orderList = [
  {
    id: 1,
    date: 'Jan 2020',
    orders: [
      {
        id: 1,
        date: '12',
        day: 'Thu',
        image: require('../../../../../assets/images/burger.jpg'),
        title: 'Draggen Burger',
        subTitle: 'A One restaurent,  Vegas',
        quantity: 2,
        totalPrice: 200,
        delivered: false,
      },
      {
        id: 2,
        date: '09',
        day: 'Mon',
        image: require('../../../../../assets/images/burger.jpg'),
        title: 'Draggen Burger',
        subTitle: 'A One restaurent,  Vegas',
        quantity: 2,
        totalPrice: 900,
        delivered: true,
      },
    ],
  },
  {
    id: 2,
    date: 'Dec 2019',
    orders: [
      {
        id: 1,
        date: '28',
        day: 'Fri',
        image: require('../../../../../assets/images/burger.jpg'),
        title: 'Draggen Burger',
        subTitle: 'A One restaurent,  Vegas',
        quantity: 2,
        totalPrice: 200,
        delivered: true,
      },
      {
        id: 2,
        date: '20',
        day: 'Wed',
        image: require('../../../../../assets/images/burger.jpg'),
        title: 'Draggen Burger',
        subTitle: 'A One restaurent,  Vegas',
        quantity: 2,
        totalPrice: 900,
        delivered: true,
      },
      {
        id: 3,
        date: '01',
        day: 'Sat',
        image: require('../../../../../assets/images/burger.jpg'),
        title: 'Draggen Burger',
        subTitle: 'A One restaurent,  Vegas',
        quantity: 2,
        totalPrice: 900,
        delivered: true,
      },
    ],
  },
];

const HistoryScreen = ({navigation}) => {
  const renderOrderItem = item => (
    <TouchableHighlight
      underlayColor={Colors.underlaylightColor}
      onPress={() => navigation.navigate('OrderDetails')}
      key={item.id}>
      <View style={styles.orderCardContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.itemDate}>{item.date}</Text>
          <View style={styles.horizontalLine} />
          <Text style={styles.itemDay}>{item.day}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Card
            containerStyle={styles.item}
            image={item.image}
            imageProps={{resizeMode: 'cover'}}
            imageStyle={styles.image}
            imageWrapperStyle={styles.imageContainer}
          />
          <View style={{flex: 1}}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <TouchableOpacity>
                <Icon
                  type="materialicons"
                  name="repeat"
                  color={Colors.primaryGradient}
                />
                <Text style={styles.repeatText}>Repeat Order</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            <View style={styles.productsDetails}>
              <Text style={[styles.detailsText, {marginRight: 5}]}>
                Quantity: {item.quantity}
              </Text>
              <View style={styles.smallLine} />
              <Text style={[styles.detailsText, {marginLeft: 5}]}>
                Total Price: ₹{item.totalPrice}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  const renderOrderList = item => (
    <View style={styles.container}>
      <Text style={styles.dateText}>{item.date}</Text>
      {item.orders.map(element => renderOrderItem(element))}
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={orderList}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => renderOrderList(item)}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    elevation: 16,
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  container: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
    fontFamily: fonts.FONT_REGULAR,
  },
  orderCardContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(153, 153, 153, 0.2)',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    marginHorizontal: '3%',
    borderWidth: 2,
    width: 10,
    borderColor: 'rgba(153, 153, 153, 0.2)',
    textAlign: 'center',
  },
  itemDate: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.FONT_REGULAR,
  },
  itemDay: {
    fontSize: 10,
    lineHeight: 15,
    fontFamily: fonts.FONT_REGULAR,
  },
  cardImageContainer: {
    flex: 1,
    borderRadius: 5,
  },
  item: {
    width: 91,
    height: 61,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  rightContainer: {
    flex: 1,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
  },
  subTitle: {
    fontSize: 8,
    lineHeight: 12,
    textTransform: 'uppercase',
    color: '#999999',
    fontFamily: fonts.FONT_REGULAR,
  },
  productsDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8,
  },
  titleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  smallLine: {
    borderWidth: 1,
    borderColor: '#999999',
  },
  detailsText: {
    fontSize: 10,
    lineHeight: 15,
    fontFamily: fonts.FONT_REGULAR,
  },
  trackText: {
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    color: '#999999',
  },
  repeatText: {
    fontSize: 8,
    lineHeight: 9,
    textAlign: 'center',
    color: '#535151',
    fontFamily: fonts.FONT_REGULAR,
  },
});
