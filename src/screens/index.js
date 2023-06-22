import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Navbar} from '../components/navbar';
import {Colors} from '../theme/colors';
import {screensDrawer} from '../configs/drawer';
import {StyleSheet} from 'react-native';
import {TitleBar} from '../components/titlebar';

const Drawer = createDrawerNavigator();

export function Routes() {
  const screens = screensDrawer();
  return (
    <>
      <TitleBar />
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'permanent',
          drawerContentContainerStyle: {
            width: 300,
            backgroundColor: Colors.primary,
          },
          drawerStyle: {
            width: 300,
            backgroundColor: Colors.primary,
          },
        }}
        drawerContent={props => <Navbar {...props} />}>
        {/* <Drawer.Screen name={'System'} component={AccountScreen} /> */}
        {screens}
      </Drawer.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
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
