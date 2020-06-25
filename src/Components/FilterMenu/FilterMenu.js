import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

const FilterMenu = ({showFilter, hideFilter}) => {
  console.log(showFilter);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Menu ref={showFilter}>
        <MenuItem onPress={hideFilter}>Menu item 1</MenuItem>
        <MenuItem onPress={hideFilter}>Menu item 2</MenuItem>
        <MenuItem onPress={hideFilter} disabled>
          Menu item 3
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={this.hideFilter}>Menu item 4</MenuItem>
      </Menu>
    </View>
  );
};

export default FilterMenu;

const styles = StyleSheet.create({});
