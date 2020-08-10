import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from 'react-native';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';
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
      headerTitle: 'Invite Friends',
      headerTitleStyle: {
        fontFamily: fonts.FONT_REGULAR,
        fontSize: 20,
        lineHeight: 30,
      },
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
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Card
            image={require('../../../../assets/images/invitefriends.png')}
            containerStyle={{elevation: 0, borderWidth: 0}}
          />

          <View style={styles.textContainer}>
            <Text style={styles.boldText}>
              Invite your friends to{'\n'} the food rescuin crew!
            </Text>
            <Text style={styles.smallText}>
              Invite your friends to the OODZEE app by {'\n'}sharing your
              personal download link.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback>
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
      </ScrollView>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
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
    fontFamily: fonts.FONT_BOLD,
  },
  smallText: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    fontFamily: fonts.FONT_REGULAR,
  },
  gradient: {
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.FONT_BOLD,
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
    fontFamily: fonts.FONT_REGULAR,
  },
  yourfriendstext: {
    marginLeft: 20,
    fontSize: 14,
    lineHeight: 21,
    alignSelf: 'flex-start',
    color: '#535151',
    fontFamily: fonts.FONT_REGULAR,
  },
});

export default InviteFriendsScreen;
