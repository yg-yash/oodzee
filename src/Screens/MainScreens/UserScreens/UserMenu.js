import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon, Card} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import UserCircle from 'react-native-vector-icons/EvilIcons';
import FilterIcon from 'react-native-vector-icons/Ionicons';

const UserMenu = ({navigation}) => {
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.secondaryGradient, Colors.primaryGradient]}
        style={styles.screen}>
        <View style={styles.iconsContainer}>
          <UserCircle
            name="user"
            color="white"
            size={40}
            style={styles.leftIcon}
          />
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
          <View style={styles.firstRow}>
            <Card
              containerStyle={styles.item}
              image={require('../../../../assests/images/burderanddrink.jpg')}
              imageProps={{resizeMode: 'contain'}}
              imageStyle={styles.image}
              imageWrapperStyle={styles.imageContainer}>
              <Text style={styles.itemText}>1 meal free</Text>
            </Card>
            <Card
              containerStyle={styles.item}
              image={require('../../../../assests/images/muffin.jpg')}
              imageProps={{resizeMode: 'contain'}}
              imageStyle={styles.image}
              imageWrapperStyle={styles.imageContainer}>
              <Text style={styles.itemText}>1 meal free</Text>
            </Card>
            <Card
              containerStyle={styles.item}
              image={require('../../../../assests/images/medalarrow.png')}
              imageProps={{resizeMode: 'contain'}}
              imageStyle={styles.image}
              imageWrapperStyle={styles.imageContainer}>
              <Text style={styles.itemText}>1 meal free</Text>
            </Card>
            <Card
              containerStyle={styles.item}
              image={require('../../../../assests/images/trophy.png')}
              imageProps={{resizeMode: 'contain'}}
              imageStyle={styles.image}
              imageWrapperStyle={styles.imageContainer}>
              <View>
                <Text style={styles.itemText}>1 meal free</Text>
              </View>
            </Card>
          </View>
          <View style={styles.secondRow}>
            <View>
              <Text style={styles.boldText}>0</Text>
              <Text style={styles.itemText}>Items{'\n'}Rescued</Text>
            </View>
            <View>
              <Text style={styles.boldText}>
                <Text style={styles.smallText}>$</Text>0
              </Text>
              <Text style={styles.itemText}>You{'\n'}Saved</Text>
            </View>
            <View>
              <Text style={styles.boldText}>
                0 <Text style={styles.smallText}>kg</Text>
              </Text>
              <Text style={styles.itemText}>Food{'\n'}Rescued</Text>
            </View>
          </View>
          <View style={styles.thirdRow}>
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('Orders')}>
              <View style={styles.itemList}>
                <Icon
                  type="feather"
                  name="shopping-bag"
                  color={Colors.secondaryGradient}
                />
                <Text style={styles.listItemText}>Orders</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.itemList}>
                <FilterIcon
                  name="ios-color-filter"
                  size={30}
                  color={Colors.secondaryGradient}
                />
                <Text style={styles.listItemText}>Filters</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.itemList}>
                <Icon
                  type="feather"
                  name="mail"
                  color={Colors.secondaryGradient}
                />
                <Text style={styles.listItemText}>
                  Verify your email address
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.itemList}>
                <Icon
                  type="fontawsome"
                  name="credit-card"
                  color={Colors.secondaryGradient}
                />
                <Text style={styles.listItemText}>Credits</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.itemList}>
                <Icon
                  type="feather"
                  name="command"
                  color={Colors.secondaryGradient}
                />
                <Text style={styles.listItemText}>
                  Karmunity - Karma Community
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.itemList}>
                <Icon
                  type="materialicons"
                  name="group-add"
                  color={Colors.secondaryGradient}
                />
                <Text style={styles.listItemText}>Invite Friends</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
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
    marginLeft: '5%',
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
  imageContainer: {
    width: '100%',
    height: '100%',
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
  itemText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
    textAlign: 'center',
    width: 60,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(153, 153, 153, 0.2)',
  },
  boldText: {
    fontSize: 30,
    lineHeight: 45,
    textAlign: 'center',
  },
  smallText: {
    fontSize: 16,
  },
  thirdRow: {
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  listItemText: {
    marginLeft: 20,
    fontSize: 15,
    lineHeight: 21,
  },
});
export default UserMenu;
