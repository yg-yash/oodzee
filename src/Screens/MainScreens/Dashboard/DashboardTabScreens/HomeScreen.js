import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import Colors from '../../../../constants/Colors';
import {Icon, Badge} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const [foodItems, setfoodItems] = useState([
    {
      id: 1,
      image: require('../../../../../assests/images/burger.jpg'),
    },
    {
      id: 2,
      image: require('../../../../../assests/images/burger.jpg'),
    },
    {
      id: 3,
      image: require('../../../../../assests/images/burger.jpg'),
    },
    {
      id: 4,
      image: require('../../../../../assests/images/burger.jpg'),
    },
  ]);

  const _renderItem = (item, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('FoodDetail')}>
        <View style={styles.card}>
          <Image source={item.image} resizeMode="cover" style={styles.image} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <ScrollView style={styles.screen}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={foodItems}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => _renderItem(item, index)}
      />
      <View style={styles.firstRow}>
        <Text style={styles.titleText}>
          It is a long established fact that a reader
          <Text style={styles.pinkText}>40%</Text> will be distracted by the
          readable content of a page when looking at its layout.
        </Text>
        <TouchableWithoutFeedback onPress={() => console.log('aclled')}>
          <View style={styles.grabBtn}>
            <Text style={styles.titleStyle}>Grab Now !</Text>
            <Icon
              name="arrowright"
              type="antdesign"
              size={15}
              style={{marginLeft: 15}}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.secondRow} scrollEnabled>
        <View style={styles.feedbackCard}>
          <View style={styles.badgeContainer}>
            <Badge
              containerStyle={styles.badge}
              status="error"
              value={
                <Icon type="antdesign" color="white" name="close" size={10} />
              }
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.cardText}>
              aIt is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </View>
        </View>
        <View style={styles.feedbackCard}>
          <View style={styles.badgeContainer}>
            <Badge
              containerStyle={styles.badge}
              status="error"
              value={
                <Icon type="antdesign" color="white" name="close" size={10} />
              }
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.cardText}>
              aIt is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </View>
        </View>
        <View style={styles.feedbackCard}>
          <View style={styles.badgeContainer}>
            <Badge
              containerStyle={styles.badge}
              status="error"
              value={
                <Icon type="antdesign" color="white" name="close" size={10} />
              }
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.cardText}>
              aIt is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </View>
        </View>
        <View style={styles.feedbackCard}>
          <View style={styles.badgeContainer}>
            <Badge
              containerStyle={styles.badge}
              status="error"
              value={
                <Icon type="antdesign" color="white" name="close" size={10} />
              }
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.cardText}>
              aIt is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 10,
  },
  card: {
    height: 185,
    width: 277,
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 5,
  },
  image: {
    borderRadius: 15,
    width: '100%',
    height: '100%',
  },
  firstRow: {
    paddingHorizontal: 25,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
  pinkText: {
    color: Colors.primaryGradient,
  },
  grabBtn: {
    marginTop: 20,
    width: 150,
    height: 36,
    borderRadius: 23,
    borderColor: Colors.primaryGradient,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleStyle: {
    color: 'black',
    letterSpacing: 2,
    fontSize: 10,
    textTransform: 'uppercase',
    lineHeight: 12,
    textAlign: 'center',
  },
  secondRow: {
    marginTop: 25,
    paddingHorizontal: 15,
  },
  feedbackCard: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    height: 78,
    // paddingVertical: 10,
    marginHorizontal: 3,
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },

  cardText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#535151',
    paddingHorizontal: 10,
  },
  badge: {
    // justifyContent: 'flex-end',
    color: Colors.primaryGradient,
  },
  badgeContainer: {
    alignSelf: 'flex-end',
  },
});

export default HomeScreen;
