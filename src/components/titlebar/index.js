import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native';

const Drawer = createDrawerNavigator();

export function TitleBar() {
  const [onHover, setOnHover] = React.useState(false);
  const navigation = useNavigation();

  const onHoverIn = () => {
    setOnHover(true);
  };
  const onHoverOut = () => {
    setOnHover(false);
  };
  const onPress = () => {
    console.log('onPress');
    navigation.goBack();
  };

  return (
    <View style={styles.titleBar}>
      <TouchableHighlight
        // onHoverIn={onHoverIn}
        // onHoverOut={onHoverOut}
        onPress={onPress}
        style={[styles.backButton, onHover && styles.backButtonHovered]}>
        <Text style={styles.icon}>&#xEC52;</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBar: {
    height: 32,
  },
  backButton: {
    height: 32,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonHovered: {
    backgroundColor: 'red',
  },
  icon: {
    fontFamily: 'Segoe MDL2 Assets',
    fontSize: 18,
    color: '#333333',
  },
});
