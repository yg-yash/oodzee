import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';

const orderList = [
  {
    id: 1,
    date: 'Jan 2020',
    orders: [
      {
        date: '12',
        day: 'Thu',
        image: require('../../../../../assests/images/burger.jpg'),
        title: 'Draggen Burger',
        subTitle: 'A One restaurent,  Vegas',
        quantity: 2,
        totalPrice: 200,
        delivered: false,
      },
      {
        date: '09',
        day: 'Mon',
        image: require('../../../../../assests/images/burger.jpg'),
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
        date: '28',
        day: 'Fri',
        image: require('../../../../../assests/images/burger.jpg'),
        title: 'Draggen Burger',
        subTitle: 'A One restaurent,  Vegas',
        quantity: 2,
        totalPrice: 200,
        delivered: true,
      },
      {
        date: '20',
        day: 'Wed',
        image: require('../../../../../assests/images/burger.jpg'),
        title: 'Draggen Burger',
        subTitle: 'A One restaurent,  Vegas',
        quantity: 2,
        totalPrice: 900,
        delivered: true,
      },
      {
        date: '01',
        day: 'Sat',
        image: require('../../../../../assests/images/burger.jpg'),
        title: 'Draggen Burger',
        subTitle: 'A One restaurent,  Vegas',
        quantity: 2,
        totalPrice: 900,
        delivered: true,
      },
    ],
  },
];

const Orders = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const renderOrderItem = item => (
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
            <View>
              <TouchableOpacity>
                <Text style={styles.trackText}>
                  {item.delivered ? '' : 'Track order'}
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.orderStatusText,
                  {backgroundColor: item.delivered ? '#21923A' : '#F0C222'},
                ]}>
                {item.delivered ? 'Delivered' : 'In Progress'}
              </Text>
            </View>
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
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => renderOrderList(item)}
      />
    </View>
  );
};

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
  },
  itemDay: {
    fontSize: 10,
    lineHeight: 15,
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
    marginLeft: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 18,
  },
  subTitle: {
    fontSize: 8,
    lineHeight: 8,
    textTransform: 'uppercase',
    color: '#999999',
  },
  productsDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8,
  },
  titleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderStatusText: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: 'white',
    fontSize: 10,
    borderRadius: 16,
  },
  smallLine: {
    borderWidth: 1,
    borderColor: '#999999',
  },
  detailsText: {
    fontSize: 10,
    lineHeight: 15,
  },
  trackText: {
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    color: '#999999',
  },
});

export default Orders;
