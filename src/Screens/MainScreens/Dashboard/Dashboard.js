import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Platform,
  View,
  TextInput,
  Text,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';
import {Card, Icon} from 'react-native-elements';
//import MapView from 'react-native-maps';
import FilterMenu from '../../../Components/FilterMenu/FilterMenu';

const Dashboard = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  // const showFilterRef = useRef().current;

  // const showFillterMenu = showFilterRef.show();
  // const hideFillterMenu = showFilterRef.hide();
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.secondaryGradient, Colors.primaryGradient]}
        style={styles.screen}>
        <View style={styles.iconsContainer}>
          <Icon
            type={Platform.OS === 'android' ? 'materialicon' : 'ionicons'}
            name={Platform.OS === 'android' ? 'menu' : 'ios-menu'}
            color="white"
            size={25}
            style={styles.leftIcon}
          />
          <View style={styles.rightIcons}>
            <Icon
              type="feather"
              name="sliders"
              //             onPress={() =>}
              color="white"
              size={25}
            />
            <Icon
              type="antdesign"
              name="shoppingcart"
              color="white"
              size={25}
              onPress={() => navigation.navigate('FoodDetail')}
            />
          </View>
        </View>
        <Card containerStyle={styles.card}>
          <View style={styles.floatCard}>
            <View style={styles.inputContainer}>
              <Icon
                type={Platform.OS === 'android' ? 'materialicons' : 'ionicons'}
                name={Platform.OS === 'android' ? 'search' : 'ios-search'}
                size={30}
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
          {/* <View style={{flex: 1}}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          <View>
        </View> */}
        </Card>
      </LinearGradient>
      {/* <FilterMenu
        showFilter={showFilterRef}
        hideFillterMenu={hideFillterMenu}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
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
  // mapView: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   width: '100%',
  //   height: '100%',
  // },
  iconsContainer: {
    marginTop: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftIcon: {
    marginLeft: '10%',
  },
  rightIcons: {
    flexDirection: 'row',
    width: '18%',
    justifyContent: 'space-between',
    marginRight: '6%',
  },
  floatCard: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    width: '70%',
    marginVertical: 10,
  },
  inputLogo: {
    marginLeft: '10%',
    color: '#999999',
  },
  input: {
    color: '#999999',
  },
  circleSend: {
    borderRadius: 100,
    borderWidth: 1,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  panelContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default Dashboard;
