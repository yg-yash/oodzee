import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../constants/Colors';

const GradientHeader = props => {
  return (
    <HeaderButton style={{backgroundColor: '#eee'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.secondaryGradient, Colors.primaryGradient]}
        style={styles.gradient}
      />
    </HeaderButton>
  );
};

export default GradientHeader;

const styles = StyleSheet.create({});
