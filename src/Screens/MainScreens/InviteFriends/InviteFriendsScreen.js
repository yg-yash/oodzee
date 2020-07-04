import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Colors from '../../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {Card} from 'react-native-elements';
import UserCircle from 'react-native-vector-icons/EvilIcons';

const friends = [
  {
    name: 'Lorem Ipsum',
    image: <UserCircle name="user" size={60} />,
  },
  {
    name: 'Lorem Ipsum',
    image: <UserCircle name="user" size={60} />,
  },
  {
    name: 'Lorem Ipsum',
    image: <UserCircle name="user" size={60} />,
  },
  {
    name: 'Lorem Ipsum',
    image: <UserCircle name="user" size={60} />,
  },
];

const InviteFriendsScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
    });
  }, [navigation]);
  const renderFriends = item => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <UserCircle name="user" size={60} />

      <Text style={styles.userName} numberOfLines={5}>
        {item.name}
      </Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Card image={require('../../../../assests/images/invitefriends.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>
            Invite your friends to{'\n'} the food rescuin crew!
          </Text>
          <Text style={styles.smallText}>
            Invite your friends to the OODZEE app by {'\n'}sharing your personal
            download link.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Payment')}>
            <LinearGradient
              start={{x: 0.5, y: 0.5}}
              end={{x: 1, y: 0}}
              colors={[Colors.primaryGradient, Colors.secondaryGradient]}
              style={styles.gradient}>
              <Text style={styles.btnText}>Share with your friend !</Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.smallText}>
          By inviting a friend to OODZEE{'\n'}you accept our
          <Text style={[styles.boldText, {fontSize: 10}]}> T {'&'} C.</Text>
        </Text>
        <View style={styles.bottomCard}>
          <Text style={styles.yourfriendstext}>Your Friends</Text>
          <View style={styles.friendsContainer}>
            <FlatList
              data={friends}
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({item}) => renderFriends(item)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    paddingTop: 6,
    elevation: 20,
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    paddingVertical: '18%',
    paddingHorizontal: '7%',
  },
  textContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
  gradient: {
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    marginVertical: 20,
  },
  bottomCard: {
    marginTop: 50,
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  userName: {
    marginTop: 3,
    marginHorizontal: 10,
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
  },
  yourfriendstext: {
    marginLeft: 20,
    fontSize: 14,
    lineHeight: 21,
    alignSelf: 'flex-start',
    color: '#535151',
  },
});

export default InviteFriendsScreen;
