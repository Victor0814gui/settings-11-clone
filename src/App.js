import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Routes} from './screens';
import {Pressable} from 'react-native';
import {Colors} from './theme/colors';
import {NavigationContainer} from '@react-navigation/native';

export function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer
        theme={{
          colors: {
            background: Colors.primary,
            text: Colors.text,
          },
        }}>
        <Routes />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
