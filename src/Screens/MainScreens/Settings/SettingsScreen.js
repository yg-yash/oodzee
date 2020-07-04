import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon, Card} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import BackIcon from 'react-native-vector-icons/Ionicons';
import UserEdit from 'react-native-vector-icons/FontAwesome5';
import ToolsIcon from 'react-native-vector-icons/Octicons';
import LogoutIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = ({navigation}) => {
  return (
    <>
      <LinearGradient
        start={{x: 0.4, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={styles.screen}>
        <View style={styles.iconsContainer}>
          <BackIcon
            name="ios-arrow-back"
            color="white"
            size={20}
            style={styles.leftIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.settingTitle}>Settings</Text>
        </View>
        <Card containerStyle={styles.card}>
          <View style={styles.firstRow}>
            <Text style={styles.userIdText}>User Id: 25566</Text>
          </View>
          <ScrollView>
            <View style={styles.secondRow}>
              <View style={styles.itemList}>
                <View style={{width: 20}} />
                <Text style={styles.aboutText}>About Oodzee</Text>
              </View>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('Feedback')}>
                <View style={styles.itemList}>
                  <Icon
                    size={20}
                    type="materialicons"
                    name="feedback"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Give feedback</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor={Colors.underlaylightColor}>
                <View style={styles.itemList}>
                  <Icon
                    size={20}
                    type="antdesign"
                    name="questioncircleo"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>How to use OODZEE</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor={Colors.underlaylightColor}>
                <View style={styles.itemList}>
                  <Icon
                    size={20}
                    type="simplelineicons"
                    name="home"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Connect your business</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.secondRow}>
              <View style={styles.itemList}>
                <View style={{width: 20}} />
                <Text style={styles.aboutText}>User Settings</Text>
              </View>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('EditProfile')}>
                <View style={styles.itemList}>
                  <UserEdit
                    size={15}
                    name="user-edit"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Edit Profile</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('UserPaymentMethods')}>
                <View style={styles.itemList}>
                  <Icon
                    size={20}
                    type="materialicons"
                    name="payment"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Payment methods</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('Notification')}>
                <View style={styles.itemList}>
                  <Icon
                    size={20}
                    type="materialicons"
                    name="notifications-none"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Notifications</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('Unlock')}>
                <View style={styles.itemList}>
                  <Icon
                    size={20}
                    type="materialicons"
                    name="lock-open"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>
                    Unlock hidden location
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('PersonalisationSettings')}>
                <View style={styles.itemList}>
                  <ToolsIcon
                    name="tools"
                    size={20}
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>
                    Personalisation settings
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor={Colors.underlaylightColor}>
                <View style={styles.itemList}>
                  <LogoutIcon
                    name="logout"
                    size={20}
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Logout</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.secondRow}>
              <View style={styles.itemList}>
                <View style={{width: 20}} />
                <Text style={styles.aboutText}>Document</Text>
              </View>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('UserAgreement')}>
                <View style={styles.itemList}>
                  <Icon
                    size={20}
                    type="antdesign"
                    name="user"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>User Agreement</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('PrivacyPolicy')}>
                <View style={styles.itemList}>
                  <Icon
                    size={20}
                    type="entypo"
                    name="text-document"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Privacy Policy</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={Colors.underlaylightColor}
                onPress={() => navigation.navigate('SoftwareLicense')}>
                <View style={styles.itemList}>
                  <Icon
                    size={20}
                    type="antdesign"
                    name="filetext1"
                    color={Colors.primaryGradient}
                  />
                  <Text style={styles.listItemText}>Software licences</Text>
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    marginTop: 20,
    marginHorizontal: 0,
    padding: 0,
    justifyContent: 'flex-start',
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
  settingTitle: {
    color: 'white',
    fontSize: 20,
    flex: 1.6,
    lineHeight: 30,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },
  leftIcon: {
    marginLeft: 15,
    flex: 1,
  },
  rightIcons: {
    flexDirection: 'row',
    width: '18%',
    justifyContent: 'space-around',
    marginRight: 14,
  },
  firstRow: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  item: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {width: 1, height: 13},
    borderRadius: 7,
  },
  itemText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999999',
    textAlign: 'center',
    width: 60,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },

  userIdText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.primaryGradient,
  },
  boldText: {
    fontSize: 30,
    lineHeight: 45,
    textAlign: 'center',
  },
  smallText: {
    fontSize: 16,
  },
  secondRow: {
    paddingTop: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'rgba(153, 153, 153, 0.2)',
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  listItemText: {
    marginLeft: 15,
    fontSize: 15,
    lineHeight: 21,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#535151',
    textTransform: 'uppercase',
    marginLeft: 15,
  },
});
export default SettingsScreen;
