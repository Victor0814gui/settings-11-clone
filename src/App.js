import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Routes} from './screens';
import {Pressable} from 'react-native';

export function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Pressable style={styles.backButton}>
          <Text style={styles.icon}>&#xEC52;</Text>
        </Pressable>
      </View>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f9',
  },
  titleBar: {
    height: 32,
  },
  backButton: {
    height: 32,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontFamily: 'Segoe MDL2 Assets',
    fontSize: 18,
    color: '#333333',
  },
});
