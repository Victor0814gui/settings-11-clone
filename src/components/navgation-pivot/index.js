import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Section} from '../components/section';

export function NavigationPivot({navigation, state}) {
  const routeNamesLenght = index => index !== state.length - 1;

  const handlerNavigation = routeName => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.containerWrapper}>
      {state.map((e, index) => (
        <>
          <Text
            onPress={() => handlerNavigation(e)}
            style={[
              styles.navigationPivotContainerText,
              !routeNamesLenght(index) &&
                styles.navigationPivotContainerTextActive,
            ]}>
            {e}
          </Text>
          {routeNamesLenght(index) && (
            <Text style={[styles.icon, styles.iconLarge]}>&#xE76C;</Text>
          )}
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    backgroundColor: '#f0f3f9',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navigationPivotContainerText: {
    fontSize: 38,
    color: '#888888',
    fontWeight: '600',
  },
  navigationPivotContainerTextActive: {
    color: '#333333',
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
