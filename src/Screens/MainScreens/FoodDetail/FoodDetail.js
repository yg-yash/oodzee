import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import Colors from '../../../constants/Colors';

const FoodDetail = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <Icon type="antdesign" name="shoppingcart" size={25} />
      ),
      headerTitleAlign: 'center',
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <Card
        containerStyle={styles.card}
        // image={{
        //   uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        // }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            }}
          />
          <View>
            <Icon type="ionicons" style={styles.close} name="close" size={25} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.line} />
            <View style={styles.firstRow}>
              <Text>Draggen Burger</Text>
              <Text>₹450</Text>
            </View>
            <Text>A One restaurent, Vegas</Text>
            <Text>4.0</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    margin: 0,
    padding: 0,
  },
  imageContainer: {
    height: Dimensions.get('screen').height / 3.2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  close: {
    // margin: 5,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // width: 25,
    // height: 25,
    // zIndex: 3,
    backgroundColor: '#ccc',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    alignItems: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
  },
  line: {
    width: '15%',
    height: '20%',
    backgroundColor: Colors.secondaryGradient,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FoodDetail;
