import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import fonts from '../../../constants/fonts';

const FeedbackChatScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle: 'OODZEE',
      headerTitleStyle: {
        fontSize: 20,
        lineHeight: 30,
        fontfamily: fonts.FONT_REGULAR,
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.popToTop()}>
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
  return <View style={styles.screen} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    overflow: 'hidden',
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
    padding: 20,
  },
  heading: {
    fontSize: 18,
    lineHeight: 27,
  },
  subheading: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
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
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
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
    width: '100%',
    paddingHorizontal: 20,
    fontFamily: 'Signika-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 6,
    borderRadius: 21,
    marginRight: 10,
  },
  inputLogo: {
    marginLeft: 10,
    color: '#999999',
  },
  gradientSend: {
    width: 50,
    height: 44,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
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
  },
});

export default FeedbackChatScreen;
