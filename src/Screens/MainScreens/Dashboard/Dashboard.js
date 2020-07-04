import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Platform,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import {Icon, Card} from 'react-native-elements';
import MapView, {Marker} from 'react-native-maps';
import BottomSheet from 'reanimated-bottom-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../constants/Colors';
import HomeScreen from './DashboardTabScreens/HomeScreen';
import FoodScreen from './DashboardTabScreens/FoodScreen';
import HistoryScreen from './DashboardTabScreens/HistoryScreen';

const Dashboard = ({navigation}) => {
  const refRBSheet = useRef();
  const [searchValue, setSearchValue] = useState('');
  const [showOrder, setShowOrder] = useState(true);
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home'},
    {key: 'food', title: 'Food'},
    {key: 'history', title: 'History'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'home':
        return <HomeScreen navigation={navigation} />;
      case 'food':
        return <FoodScreen navigation={navigation} />;
      case 'history':
        return <HistoryScreen navigation={navigation} />;
      default:
        return null;
    }
  };

  const renderCurrentOrder = () => (
    <TouchableOpacity
      style={styles.currentOrder}
      onPress={() => {
        setShowOrder(false);
        navigation.navigate('OrderStatus');
      }}>
      <View style={styles.currentOrderRow}>
        <Text style={styles.currentOrderText}>
          Rate Your food - Draggen Burger
        </Text>
        <Icon
          name="close"
          type="antdesign"
          size={20}
          onPress={() => setShowOrder(false)}
        />
      </View>
      <View style={styles.rating}>
        <View style={styles.ratingIcons}>
          <Icon type="antdesign" name="star" color={'#FFC107'} size={20} />
          <Icon type="antdesign" name="star" color={'#FFC107'} size={20} />
          <Icon type="antdesign" name="star" color={'#FFC107'} size={20} />
          <Icon type="antdesign" name="star" color={'#FFC107'} size={20} />
          <Icon type="antdesign" name="staro" color={'#FFC107'} size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={{borderTopStartRadius: 55, borderTopEndRadius: 55}}
      tabStyle={styles.tabView}
      renderLabel={false}
      renderIcon={({route, focused, color}) => {
        if (route.key === 'home') {
          return (
            <MaterialCommunityIcons
              name="home"
              size={30}
              color={focused ? Colors.primaryGradient : '#999999'}
            />
          );
        } else if (route.key === 'food') {
          return (
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={30}
              color={focused ? Colors.primaryGradient : '#999999'}
            />
          );
        } else if (route.key === 'history') {
          return focused ? (
            <MaterialCommunityIcons
              name="cards-heart"
              size={30}
              color={Colors.primaryGradient}
            />
          ) : (
            <MaterialCommunityIcons
              name="heart-outline"
              size={30}
              color="#999999"
            />
          );
        }
      }}
    />
  );

  const renderContent = () => (
    <View style={styles.sheetContainer}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        lazy
      />
    </View>
  );

  return (
    <LinearGradient
      start={{x: 0.4, y: 0}}
      end={{x: 1, y: 0.1}}
      colors={[Colors.primaryGradient, Colors.secondaryGradient]}
      style={styles.screen}>
      <View style={styles.iconsContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Icon
            type={Platform.OS === 'android' ? 'materialicon' : 'ionicons'}
            name={Platform.OS === 'android' ? 'menu' : 'ios-menu'}
            color="white"
            size={25}
            style={styles.leftIcon}
          />
        </TouchableWithoutFeedback>
        <View style={styles.rightIcons}>
          <Icon type="feather" name="sliders" color="white" size={25} />
          <Icon
            type="antdesign"
            name="shoppingcart"
            color="white"
            size={25}
            onPress={() => navigation.navigate('FoodDetail')}
          />
        </View>
      </View>
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 28.8386,
            longitude: 78.7733,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.mapContainer}>
          <Marker coordinate={{latitude: 28.8386, longitude: 78.7733}} />
        </MapView>
        <View style={styles.floatCard}>
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
          <View style={styles.circleSend}>
            <Icon
              type="feather"
              name="send"
              size={25}
              color={Colors.primaryGradient}
            />
          </View>
        </View>

        <>
          <BottomSheet
            ref={refRBSheet}
            snapPoints={[650, 250, 0]}
            initialSnap={1}
            renderContent={renderContent}
            onCloseEnd={() => refRBSheet.current.snapTo(1)}
            renderHeader={() => showOrder && renderCurrentOrder()}
          />
          <Text />
        </>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
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
  mapContainer: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginTop: '8%',
    marginHorizontal: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'flex-start',
  },
  tabView: {
    height: 81,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  iconsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  leftIcon: {
    marginLeft: 15,
  },
  rightIcons: {
    flexDirection: 'row',
    width: '18%',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  floatCard: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 30,
    height: 50,
    marginVertical: 10,
    backgroundColor: 'white',
    elevation: 6,
  },
  inputLogo: {
    marginLeft: 10,
  },
  input: {
    color: '#999999',
    flex: 1,
  },
  circleSend: {
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  sheetContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  currentOrder: {
    padding: 20,
    height: 89,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  currentOrderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ratingIcons: {
    flexDirection: 'row',
    marginLeft: '2%',
    alignItems: 'center',
    height: '100%',
  },
  currentOrderText: {
    fontSize: 14,
    lineHeight: 21,
  },
});
export default Dashboard;
