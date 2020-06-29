import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon, Card} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import UserCircle from 'react-native-vector-icons/EvilIcons';
import FilterIcon from 'react-native-vector-icons/Ionicons';

const offers = [
  {
    image: require('../../../../assests/images/burderanddrink.jpg'),
    title: '1 meal free',
    subtitle: `make your order of RS. 1000 and you will get 1 meal for free. *tearm and conditions apply`,
    status: 'locked',
  },
  {
    image: require('../../../../assests/images/burderanddrink.jpg'),
    title: '1 meal free',
    subtitle: `make your order of RS. 1000 and you will get 1 meal for free. *tearm and conditions apply`,
    status: 'locked',
  },
  {
    image: require('../../../../assests/images/burderanddrink.jpg'),
    title: '1 meal free',
    subtitle: `make your order of RS. 1000 and you will get 1 meal for free. *tearm and conditions apply`,
    status: 'locked',
  },
  {
    image: require('../../../../assests/images/burderanddrink.jpg'),
    title: '1 meal free',
    subtitle: `make your order of RS. 1000 and you will get 1 meal for free. *tearm and conditions apply`,
    status: 'locked',
  },
  {
    image: require('../../../../assests/images/burderanddrink.jpg'),
    title: '1 meal free',
    subtitle: `make your order of RS. 1000 and you will get 1 meal for free. *tearm and conditions apply`,
    status: 'locked',
  },
];

const UserMenu = ({navigation}) => {
  const [userName, setUserName] = useState('John Albert');
  const userNameArr = userName.split(' ');

  const renderOffers = item => {
    return (
      <View style={styles.orderCardContainer}>
        <View style={styles.leftContainer}>
          <Card
            containerStyle={styles.item}
            image={item.image}
            imageProps={{resizeMode: 'contain'}}
            imageStyle={styles.image}
            imageWrapperStyle={styles.imageContainer}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.subtitleText}>{item.subtitle}</Text>
          <Text style={styles.termText}> *tearm and conditions apply</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.secondaryGradient, Colors.primaryGradient]}
        style={styles.screen}>
        <View style={styles.iconsContainer}>
          <View style={styles.leftIcon}>
            <UserCircle name="user" color="white" size={40} />
            <Text style={styles.userNameText}>
              Hi,<Text style={styles.firstName}>{userNameArr[0]}</Text>{' '}
              {userNameArr[1]}
            </Text>
          </View>
          <View style={styles.rightIcons}>
            <Icon type="antdesign" name="setting" color="white" size={25} />
            <Icon
              type="antdesign"
              name="close"
              color="white"
              size={25}
              onPress={() => navigation.navigate('FoodDetail')}
            />
          </View>
        </View>
        <Card containerStyle={styles.card}>
          <FlatList
            data={offers}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => renderOffers(item)}
          />
        </Card>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '5%',
  },
  card: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 0,
    padding: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'flex-start',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: {
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameText: {
    fontSize: 20,
    lineHeight: 30,
    color: '#F9F7F8',
    marginLeft: 5,
  },
  rightIcons: {
    flexDirection: 'row',
    width: '18%',
    justifyContent: 'space-around',
    marginRight: 14,
  },
  firstRow: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 80,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(153, 153, 153, 0.2)',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstName: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#F9F7F8',
  },
  orderCardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(153, 153, 153, 0.2)',
    padding: 20,
  },

  item: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {width: 1, height: 13},
    borderRadius: 7,
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
  },
  titleText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#999999',
  },
  subtitleText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#535151',
  },
  termText: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.secondaryGradient,
  },
});
export default UserMenu;
