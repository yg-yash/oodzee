import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import fonts from '../../../constants/fonts';
import LinearGradient from 'react-native-linear-gradient';

const FeedbackScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => <Text style={styles.headerTitleStyle}>Feedback</Text>,
      headerTitle: '',
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            type="antdesign"
            name="close"
            size={20}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.heading}>Start a conversation</Text>
        <Text style={styles.subheading}>Typically replies in a day</Text>
        <View style={styles.userIconContainer}>
          <Avatar
            containerStyle={styles.avatar}
            size={50}
            source={require('../../../../assets/images/usericon1.jpg')}
          />
          <Avatar
            containerStyle={styles.avatar}
            size={50}
            source={require('../../../../assets/images/usericon2.png')}
          />
          <Avatar
            containerStyle={styles.avatar}
            size={50}
            source={require('../../../../assets/images/usericon1.jpg')}
          />
          <Avatar
            containerStyle={styles.avatar}
            size={50}
            source={require('../../../../assets/images/usericon2.png')}
          />
          <Avatar
            containerStyle={styles.avatar}
            size={50}
            source={require('../../../../assets/images/usericon2.png')}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('FeedbackChat')}>
          <LinearGradient
            start={{x: 0.5, y: 0.5}}
            end={{x: 1, y: 0}}
            colors={[Colors.primaryGradient, Colors.secondaryGradient]}
            style={styles.gradient}>
            <Text style={styles.btnText}>new conversation</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
        <View style={styles.bottomContainer}>
          <Text style={styles.heading}>Find an answer yourself</Text>
          <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
              <Icon
                type="feather"
                name="search"
                color="#999999"
                style={styles.inputLogo}
              />
              <TextInput
                style={styles.input}
                placeholder="Search your location...."
              />
            </View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('App')}>
              <LinearGradient
                start={{x: 0.5, y: 0.5}}
                end={{x: 1, y: 0}}
                colors={[Colors.primaryGradient, Colors.secondaryGradient]}
                style={styles.gradientSend}>
                <Icon type="antdesign" name="right" color="white" />
              </LinearGradient>
            </TouchableWithoutFeedback>
          </View>
          <ScrollView style={styles.feedbackListContainer}>
            <View style={styles.feedbackCard}>
              <Icon
                size={30}
                type="entypo"
                name="text-document"
                color="#999999"
                style={styles.cardIcon}
              />
              <View style={{flex: 1}}>
                <Text style={styles.cardText}>
                  aIt is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout.
                </Text>
              </View>
            </View>
            <View style={styles.feedbackCard}>
              <Icon
                size={30}
                type="entypo"
                name="text-document"
                color="#999999"
                style={styles.cardIcon}
              />
              <View style={{flex: 1}}>
                <Text style={styles.cardText}>
                  aIt is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout.
                </Text>
              </View>
            </View>
            <View style={styles.feedbackCard}>
              <Icon
                size={30}
                type="entypo"
                name="text-document"
                color="#999999"
                style={styles.cardIcon}
              />
              <View style={{flex: 1}}>
                <Text style={styles.cardText}>
                  aIt is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout.
                </Text>
              </View>
            </View>
            <View style={styles.feedbackCard}>
              <Icon
                size={30}
                type="entypo"
                name="text-document"
                color="#999999"
                style={styles.cardIcon}
              />
              <View style={{flex: 1}}>
                <Text style={styles.cardText}>
                  aIt is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout.
                </Text>
              </View>
            </View>
          </ScrollView>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.FONT_REGULAR,
  },
  subheading: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
    fontFamily: fonts.FONT_REGULAR,
  },
  userIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft: 10,
  },
  avatar: {marginRight: 10},
  gradient: {
    width: '100%',
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
  bottomContainer: {
    flex: 1,
    marginTop: 30,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 20,
    flex: 1,
    fontFamily: fonts.FONT_BOLD,
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 21,
    marginRight: 10,
  },
  inputLogo: {
    marginLeft: 10,
    color: '#999999',
  },
  gradientSend: {
    width: 50,
    height: 50,
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
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  feedbackListContainer: {
    marginTop: 20,
    marginBottom: 10,
    overflow: 'hidden',
  },

  feedbackCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 78,
    paddingVertical: 10,
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
  cardIcon: {
    marginLeft: 5,

    marginTop: 10,
  },
  cardText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#535151',
    paddingHorizontal: 10,
    fontFamily: fonts.FONT_REGULAR,
  },

  headerTitleStyle: {
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 10,
    fontFamily: fonts.FONT_REGULAR,
  },
});

export default FeedbackScreen;
