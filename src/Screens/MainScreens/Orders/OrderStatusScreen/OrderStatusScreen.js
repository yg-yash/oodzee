import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../../constants/Colors';
import fonts from '../../../../constants/fonts';
import {Card, Icon} from 'react-native-elements';

const OrderStatusScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0.4}}
        end={{x: 0.2, y: 0}}
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={styles.linearGradient}>
        <View style={styles.centerContainer}>
          <Card containerStyle={styles.card}>
            <View style={styles.upperCardContainer}>
              <View style={styles.iconContainer}>
                <Icon
                  type={
                    Platform.OS === 'android' ? 'materialicons' : 'ionicons'
                  }
                  name={Platform.OS === 'android' ? 'close' : 'ios-close'}
                  color={Colors.primaryGradient}
                  size={20}
                  onPress={() => navigation.pop()}
                />
              </View>
              <View style={styles.mainContaier}>
                <View style={styles.firstContent}>
                  <Text style={styles.itemText}>Draggen Burger</Text>
                  <Text style={styles.recipeText}>
                    Fresh bread, Capsicum, Tometo, Onion
                  </Text>
                  <Text style={styles.detailsText}>
                    4.7 {'  '}|{'  '} 200 ratings {'  '}|{'  '} 5.0 km
                  </Text>
                </View>
                <View style={styles.secondContent}>
                  <View style={styles.textView}>
                    <Text style={styles.boldText}>5.0 km</Text>
                    <Text style={styles.smallText}>distance</Text>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.textView}>
                    <Text style={styles.minText}>20 min</Text>
                    <Text style={styles.smallText}>Ready for pickup </Text>
                  </View>
                </View>
                <View style={styles.thirdContent}>
                  <Text style={styles.preparingText}>
                    Your food is preparing!
                  </Text>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('OrderDone')}>
                    <View style={styles.button}>
                      <Text style={styles.deliveryText}>Delivery</Text>
                      <Text style={styles.pickupText}>PICK UP</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
            <View style={styles.bottomCardView}>
              <View style={styles.placeContainer}>
                <Icon type="entypo" name="location-pin" />
                <Text style={styles.pickupOrderText}>This is pickup order</Text>
              </View>
              <View style={styles.infoContainer}>
                <View>
                  <Text style={styles.instruct}>
                    You’ll need to pick up this order:
                  </Text>
                  <Text style={styles.addressText}>
                    Addressline 1, landmark,{'\n'}st.no: 1
                  </Text>
                  <View style={styles.distanceContainer}>
                    <Text style={styles.distance}>5.0 km </Text>
                    <Text style={styles.awayText}>away</Text>
                  </View>
                </View>
                <Card containerStyle={styles.mapImageContainer} />
              </View>
            </View>
          </Card>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    height: Dimensions.get('screen').height / 1.5,
    borderRadius: 20,
    padding: 0,
    margin: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  upperCardContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignSelf: 'flex-end',
  },
  firstContent: {
    alignItems: 'center',
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 30,
    fontFamily: fonts.FONT_REGULAR,
  },
  recipeText: {
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
  },
  detailsText: {
    marginTop: 10,
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
  },
  secondContent: {
    marginHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  boldText: {
    fontFamily: fonts.FONT_BOLD,
    fontSize: 18,
    lineHeight: 27,
  },
  textView: {
    marginHorizontal: 20,
  },
  smallText: {
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 12,
    lineHeight: 21,
    color: '#000000',
  },
  minText: {
    fontFamily: fonts.FONT_BOLD,
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
  },
  line: {
    width: 1,
    marginHorizontal: '3%',
    elevation: 1,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {width: 1, height: 13},
  },
  thirdContent: {
    marginTop: '18%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 220,
    height: 44,
    borderRadius: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  preparingText: {
    fontFamily: fonts.FONT_REGULAR,
    fontSize: 18,
    lineHeight: 27,
    color: '#535151',
    textAlign: 'center',
  },
  deliveryText: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: fonts.FONT_REGULAR,
  },
  pickupText: {
    color: Colors.primaryGradient,

    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: fonts.FONT_BOLD,
  },
  bottomCardView: {
    borderTopWidth: 1,
    borderTopColor: '#999999',
    marginTop: 46,
  },
  bottomCard: {
    padding: 0,
    margin: 0,
    justifyContent: 'flex-end',
  },
  placeContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
  },
  pickupOrderText: {
    fontSize: 18,
    lineHeight: 27,
    color: '#535151',
    marginLeft: 10,
    fontFamily: fonts.FONT_REGULAR,
  },
  infoContainer: {
    flexDirection: 'row',
    marginLeft: 25,
    marginTop: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  instruct: {
    fontSize: 9,
    lineHeight: 13,
    fontFamily: fonts.FONT_REGULAR,
  },
  addressText: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
  },
  distanceContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_BOLD,
  },
  awayText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.FONT_REGULAR,
  },

  mapImageContainer: {
    width: 129,
    height: 88,
    borderRadius: 20,
  },
});

export default OrderStatusScreen;
