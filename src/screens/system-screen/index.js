import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Section} from '../../components/section';

const options = [
  {
    name: 'Display',
    routeName: 'Display',
    description: 'Monitors, brightness, night light, display profile',
    icon: '\uE7F4',
  },
  {
    name: 'Sound',
    routeName: 'Sound',
    description: 'Volume levels, output, sound devices',
    icon: '\uE767',
  },
  {
    name: 'Notifications',
    routeName: 'Notifications',
    description: 'Alerts from apps and system',
    icon: '\uEA8F',
  },
];

export function SystemScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlerCreateNewNoteFn = async () => {};

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.navigationPivotContainer}>
            <Text style={styles.navigationPivotContainerText}>System</Text>
            {/* <Text style={[styles.icon, styles.iconLarge]}>&#xE76C;</Text>
            <Text
              style={[
                styles.navigationPivotContainerText,
                styles.navigationPivotContainerTextActive,
              ]}>
              Your Microsoft account
            </Text> */}
          </View>
          {options.map(e => (
            <Section
              onPress={() => navigation.navigate(e.routeName)}
              description={e.description}
              title={e.name}
              icon={e.icon}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#f0f3f9',
  },
  backButton: {
    height: 32,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    paddingHorizontal: 41,
    paddingVertical: 21,
  },
  navigationPivotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  navigationPivotContainerText: {
    fontSize: 38,
    color: '#888888',
    fontWeight: '600',
  },
  navigationPivotContainerTextActive: {
    color: '#333333',
  },
  text: {
    color: '#333333',
    fontFamily: 'Segmdl2',
  },
  icon: {
    fontFamily: 'Segoe MDL2 Assets',
    fontSize: 18,
    color: '#333333',
  },
  iconLarge: {
    fontSize: 18,
    fontWeight: '800',
    marginHorizontal: 5,
  },
});
