import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Colors} from '../../../theme/colors';
import {NavigationPivot} from '../../../components/navgation-pivot';

export function DisplayScreen({navigation, ...rest}) {
  console.log({navigation, ...rest});
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <NavigationPivot
          navigation={navigation}
          state={['System', 'Display']}
        />
        <Text style={styles.text}>DisplayScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 41,
    paddingVertical: 21,
  },
  text: {
    color: Colors.text,
  },
});
