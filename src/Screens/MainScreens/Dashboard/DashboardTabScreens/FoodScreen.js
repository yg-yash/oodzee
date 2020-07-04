import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../../constants/Colors';

const FoodScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState(cardItems);
  const [currentItem, setCurrentItem] = useState('meals');

  const renderItem = items =>
    items.map(item =>
      currentItem === item.name ? (
        <TouchableWithoutFeedback onPress={() => setCurrentItem(item.name)}>
          <Card containerStyle={styles.itemSelectedCard}>
            {item.icon.selected}
            <Text style={styles.itemSelectedText} numberOfLines={1}>
              {item.name}
            </Text>
          </Card>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setCurrentItem(item.name)}>
          <Card containerStyle={styles.item}>
            {item.icon.notSelected}
            <Text style={styles.itemText} numberOfLines={1}>
              {item.name}
            </Text>
          </Card>
        </TouchableWithoutFeedback>
      ),
    );

  const renderTopPlaces = item => (
    <View
      style={[styles.placesContainer, {backgroundColor: item.backgroundColor}]}>
      <Card
        containerStyle={styles.placesCard}
        image={item.image}
        imageProps={{resizeMode: 'cover'}}
        imageStyle={styles.placesImage}
        imageWrapperStyle={styles.imageContainer}
      />
      <View style={styles.singleFoodTextContainer}>
        <View>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.subtitleText}>{item.subtitle}</Text>
        </View>
      </View>
    </View>
  );

  const renderSingleFoodContainer = () => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('FoodDetail')}>
      <View style={styles.singleFoodContainer}>
        <Card
          containerStyle={styles.singleFoodCard}
          image={require('../../../../../assests/images/burger.jpg')}
          imageProps={{resizeMode: 'cover'}}
          imageStyle={styles.image}
          imageWrapperStyle={styles.imageContainer}
        />
        <View style={styles.singleFoodTextContainer}>
          <View style={styles.heading}>
            <Text style={styles.foodHeading}>Draggen Burger</Text>
            <Text style={styles.pinkText}>₹ 450</Text>
          </View>
          <Text style={styles.smallGreyText}>
            {' '}
            A One restaurent{'  '}
            <Text style={styles.pinkText}>·</Text>
            {'   '}45 min
          </Text>
          <Text style={styles.foodDescription}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
          <View style={styles.ratingrow}>
            <Text style={styles.rating}>
              4.0 <Text style={styles.ratingIcons}>*****</Text>
            </Text>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="home" color="#999999" />
              <Text style={styles.smallGreyText}>1.5 km</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.inputrow}>
        <View style={styles.inputContainer}>
          <Icon
            type={Platform.OS === 'android' ? 'materialicons' : 'ionicons'}
            name={Platform.OS === 'android' ? 'search' : 'ios-search'}
            size={25}
            color="#999999"
            style={styles.inputLogo}
          />
          <TextInput
            value={searchValue}
            onChangeText={value => setSearchValue(value)}
            placeholder="Search your location"
            style={[styles.input]}
          />
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.cardRow}>
        {renderItem(items)}
      </ScrollView>
      <View>
        <View style={styles.optionsRow}>
          <TouchableOpacity style={styles.option}>
            <Icon type="feather" name="sliders" color="#999999" size={12} />
            <Text style={styles.optionText}>Filter By</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <MaterialCommunityIcons
              style={styles.optionIcon}
              name="filter-variant"
              size={15}
            />
            <Text style={styles.optionText}>Sort By</Text>
          </TouchableOpacity>
        </View>
        {renderSingleFoodContainer()}
        <Text style={styles.topPlaces}>top rated places for delievery</Text>
        <View style={styles.topPlacesContainer}>
          <FlatList
            data={topPlacesList}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => renderTopPlaces(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item}) => renderSingleFoodContainer()}
        />
      </View>
    </ScrollView>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 21,
    height: 44,
    marginVertical: 10,
    backgroundColor: 'white',
    elevation: 6,
    overflow: 'hidden',
  },
  inputLogo: {
    marginLeft: 10,
  },
  input: {
    color: '#999999',
    flex: 1,
  },
  inputrow: {
    paddingHorizontal: 20,
  },
  cardRow: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  itemSelectedCard: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: {width: 1, height: 13},
    borderRadius: 7,
    overflow: 'hidden',
  },
  itemSelectedText: {
    flex: 1,
    marginTop: 2,
    fontSize: 10,
    lineHeight: 18,
    color: '#999999',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  item: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  itemText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 18,
    color: '#999999',
    textAlign: 'center',
    flexWrap: 'wrap',
    textTransform: 'capitalize',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    color: '#999999',
  },
  optionText: {
    marginLeft: 5,
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
  },
  singleFoodCard: {
    flex: 2,
    padding: 0,
    margin: 0,
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
  singleFoodTextContainer: {
    flex: 3,
    paddingLeft: 10,
  },
  singleFoodContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',

    height: 100,
    overflow: 'hidden',
    borderBottomWidth: 2,
    borderColor: 'rgba(153, 153, 153, 0.2)',
    borderRadius: 10,
  },
  foodHeading: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 18,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pinkText: {
    color: Colors.primaryGradient,
    fontSize: 10,
    lineHeight: 12,
    textTransform: 'uppercase',
  },
  smallGreyText: {
    fontSize: 8,
    lineHeight: 12,
    textTransform: 'uppercase',
    color: '#999999',
  },
  foodDescription: {
    marginTop: 10,
    fontSize: 8,
    lineHeight: 9,
    color: '#999999',
  },
  rating: {
    fontSize: 10,
    lineHeight: 12,
    marginTop: 15,
    textTransform: 'uppercase',
  },
  ratingIcons: {
    color: '#FDD20E',
    fontSize: 10,
  },
  ratingrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topPlaces: {
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 3,
    color: '#535151',
    marginTop: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  topPlacesContainer: {
    marginTop: 5,
  },
  placesContainer: {
    height: 120,
    width: 114,
    margin: 10,
    backgroundColor: '#999999',
    borderRadius: 5,
  },
  placesCard: {
    height: 76,
    width: '100%',
    padding: 0,
    margin: 0,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: 9,
    color: 'white',
    marginTop: 5,
  },
  subtitleText: {
    fontSize: 8,
    marginTop: 5,
    lineHeight: 7,
    color: 'white',
  },
  placesImage: {
    width: '100%',
    height: '100%',
  },
});

const cardItems = [
  {
    name: 'meals',
    icon: {
      selected: (
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={20}
          color={Colors.primaryGradient}
          style={{alignSelf: 'center'}}
        />
      ),
      notSelected: (
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={20}
          color="#999999"
          style={{alignSelf: 'center'}}
        />
      ),
    },
  },
  {
    name: 'bread',
    icon: {
      selected: (
        <MaterialCommunityIcons
          name="bread-slice"
          size={20}
          color={Colors.primaryGradient}
          style={{alignSelf: 'center'}}
        />
      ),
      notSelected: (
        <MaterialCommunityIcons
          name="bread-slice-outline"
          size={20}
          color="#999999"
          style={{alignSelf: 'center'}}
        />
      ),
    },
  },
  {
    name: 'sweets',
    icon: {
      selected: (
        <MaterialCommunityIcons
          name="food-croissant"
          size={20}
          color={Colors.primaryGradient}
          style={{alignSelf: 'center'}}
        />
      ),
      notSelected: (
        <MaterialCommunityIcons
          name="food-croissant"
          size={20}
          color="#999999"
          style={{alignSelf: 'center'}}
        />
      ),
    },
  },
  {
    name: 'groceries',
    icon: {
      selected: (
        <MaterialCommunityIcons
          name="food-apple"
          size={20}
          color={Colors.primaryGradient}
          style={{alignSelf: 'center'}}
        />
      ),
      notSelected: (
        <MaterialCommunityIcons
          name="food-apple-outline"
          size={20}
          color="#999999"
          style={{alignSelf: 'center'}}
        />
      ),
    },
  },
];

const topPlacesList = [
  {
    id: 1,
    image: require('../../../../../assests/images/burger.jpg'),
    title: 'Loriem ipsum',
    subtitle: 'It is a long established fact that a reader will be distracted',
    backgroundColor: '#DB6811',
  },
  {
    id: 2,
    image: require('../../../../../assests/images/burger.jpg'),
    title: 'Loriem ipsum',
    subtitle: 'It is a long established fact that a reader will be distracted',
    backgroundColor: '#4A4A4B',
  },
  {
    id: 3,
    image: require('../../../../../assests/images/burger.jpg'),
    title: 'Loriem ipsum',
    subtitle: 'It is a long established fact that a reader will be distracted',
    backgroundColor: '#6A1500',
  },
  {
    id: 4,
    image: require('../../../../../assests/images/burger.jpg'),
    title: 'Loriem ipsum',
    subtitle: 'It is a long established fact that a reader will be distracted',
    backgroundColor: '#DB6811',
  },
  {
    id: 5,
    image: require('../../../../../assests/images/burger.jpg'),
    title: 'Loriem ipsum',
    subtitle: 'It is a long established fact that a reader will be distracted',
    backgroundColor: '#4A4A4B',
  },
];
