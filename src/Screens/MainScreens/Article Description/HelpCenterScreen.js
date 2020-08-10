import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const HelpCenterScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'left',
      headerTitle: 'Help Center',
      headerRight: () => (
        <Icon
          type="antdesign"
          name="close"
          size={20}
          style={{marginRight: 10}}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Lorrem ipsum dolorsit amet.{'\n'}This is dummy text.
        </Text>
        <View style={styles.avatarContainer}>
          <Avatar
            size={35}
            source={require('../../../../assets/images/usericon2.png')}
          />
          <View>
            <Text style={styles.greyText}>
              Written by <Text style={styles.boldText}>John Doe</Text>
            </Text>
            <Text style={styles.greyText}>Updated over a week ago</Text>
          </View>
        </View>
        <Text style={styles.para}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Text>
        <Text style={[styles.para, {marginTop: 20}]}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>
      </View>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.secondaryGradient, Colors.primaryGradient]}
        style={styles.gradient}>
        <Text style={styles.articleText}>Is this article helpful?</Text>
        <View style={styles.emojiContainer}>
          <TouchableOpacity>
            <Avatar
              rounded
              source={require('../../../../assets/images/emojis/sademoteicon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Avatar
              rounded
              source={require('../../../../assets/images/emojis/whateveremoteicon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Avatar
              rounded
              source={require('../../../../assets/images/emojis/grinningemoji.png')}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    elevation: 16,
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    lineHeight: 36,
  },
  avatarContainer: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  greyText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
    marginLeft: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black',
  },
  para: {
    fontSize: 12,
    lineHeight: 18,
    color: '#535151',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 120,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleText: {
    fontSize: 18,
    lineHeight: 27,
    color: '#ffffff',
  },
  emojiContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HelpCenterScreen;
