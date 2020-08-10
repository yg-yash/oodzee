import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon, Card} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';
import UserCircle from 'react-native-vector-icons/EvilIcons';
import FilterIcon from 'react-native-vector-icons/Ionicons';

const UserMenu = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
          start={{x: 0.4, y: 0}}
          end={{x: 1, y: 0.1}}
          colors={[Colors.primaryGradient, Colors.secondaryGradient]}
          style={styles.screen}>
          <View style={styles.iconsContainer}>
            <UserCircle
              name="user"
              color="white"
              size={40}
              style={styles.leftIcon}
            />
            <View style={styles.rightIcons}>
              <Icon
                type="antdesign"
                name="setting"
                color="white"
                size={25}
                onPress={() => navigation.navigate('Settings')}
              />
              <Icon
                type="antdesign"
                name="close"
                color="white"
                size={25}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>

          <Card containerStyle={styles.card}>
            <View style={styles.firstRow}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Offer')}>
                <Card
                  containerStyle={styles.item}
                  image={require('../../../../assets/images/burderanddrink.jpg')}
                  imageProps={{resizeMode: 'contain'}}
                  imageStyle={styles.image}
                  imageWrapperStyle={styles.imageContainer}>
                  <Text style={styles.itemText}>1 meal free</Text>
                </Card>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Offer')}>
                <Card
                  containerStyle={styles.item}
                  image={require('../../../../assets/images/muffin.jpg')}
                  imageProps={{resizeMode: 'contain'}}
                  imageStyle={styles.image}
                  imageWrapperStyle={styles.imageContainer}>
                  <Text style={styles.itemText}>1 meal free</Text>
                </Card>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Offer')}>
                <Card
                  containerStyle={styles.item}
                  image={require('../../../../assets/images/medalarrow.png')}
                  imageProps={{resizeMode: 'contain'}}
                  imageStyle={styles.image}
                  imageWrapperStyle={styles.imageContainer}>
                  <Text style={styles.itemText}>1 meal free</Text>
                </Card>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Offer')}>
                <Card
                  containerStyle={styles.item}
                  image={require('../../../../assets/images/trophy.png')}
                  imageProps={{resizeMode: 'contain'}}
                  imageStyle={styles.image}
                  imageWrapperStyle={styles.imageContainer}>
                  <View>
                    <Text style={styles.itemText}>1 meal free</Text>
                  </View>
                </Card>
              </TouchableWithoutFeedback>
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
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('Orders')}>
                <View style={styles.itemList}>
                  <Icon
                    type="feather"
                    name="shopping-bag"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Orders</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('Filter')}>
                <View style={styles.itemList}>
                  <FilterIcon
                    name="ios-color-filter"
                    size={30}
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Filters</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={styles.itemList}>
                  <Icon
                    type="feather"
                    name="mail"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>
                    Verify your email address
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('Credits')}>
                <View style={styles.itemList}>
                  <Icon
                    type="fontawsome"
                    name="credit-card"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Credits</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={styles.itemList}>
                  <Icon
                    type="feather"
                    name="command"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>
                    Karmunity - Karma Community
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('InviteFriends')}>
                <View style={styles.itemList}>
                  <Icon
                    type="materialicons"
                    name="group-add"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Invite Friends</Text>
                </View>
              </TouchableHighlight>
            </View>
          </Card>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '5%',
  },
  card: {
    marginTop: 20,
    marginHorizontal: 0,
    padding: 0,
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    elevation: 6,
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    overflow: 'hidden',
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
    paddingHorizontal: 10,
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
    fontFamily: fonts.FONT_REGULAR,
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
    fontFamily: fonts.FONT_REGULAR,
  },
  smallText: {
    fontSize: 16,
    fontFamily: fonts.FONT_REGULAR,
  },
  thirdRow: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  listItemText: {
    marginLeft: 20,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: fonts.FONT_REGULAR,
  },
});
export default UserMenu;
