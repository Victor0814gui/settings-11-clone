import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AccountScreen} from './account-screen';
import {Navbar} from '../components/navbar';
import {SystemScreen} from './system-screen';
import {View} from 'react-native';
import {ApplicationScreen} from './applications-screen';
import {AccesibilityScreen} from './accesibility-screen';
import {PersonalizationScreen} from './personalization-screen';
import {BluetoothAndDevicesScreen} from './bluetooth-and-devices-screen';
import {TimeAndLanguageScreen} from './time-and-language-screen';
import {GamingScreen} from './gaming-screen';
import {PrivacityAndSecurityScreen} from './privacity-and-security-screen';

export const itemsData = [
  {
    routeName: 'System',
    route: 'System',
    icon: require('../assets/settings.png'),
    component: SystemScreen,
  },
  {
    routeName: 'Bluetooth & Devices',
    route: 'BluetoothAndDevices',
    icon: require('../assets/settings.png'),
    component: BluetoothAndDevicesScreen,
  },
  {
    routeName: 'Personalization',
    route: 'Personalization',
    icon: require('../assets/settings.png'),
    component: PersonalizationScreen,
  },
  {
    routeName: 'Apps',
    route: 'Apps',
    icon: require('../assets/settings.png'),
    component: ApplicationScreen,
  },
  {
    routeName: 'Accounts',
    route: 'Accounts',
    icon: require('../assets/accounts-icon.webp'),
    component: AccountScreen,
  },
  {
    routeName: 'Time e Language',
    route: 'TimeAndLanguage',
    icon: require('../assets/settings.png'),
    component: TimeAndLanguageScreen,
  },
  {
    routeName: 'Gaming',
    route: 'Gaming',
    icon: require('../assets/settings.png'),
    component: GamingScreen,
  },
  {
    routeName: 'Accessibility',
    route: 'Accessibility',
    icon: require('../assets/settings.png'),
    component: AccesibilityScreen,
  },
  {
    routeName: 'Privacity & Security',
    route: 'PrivacityAndSecurity',
    icon: require('../assets/settings.png'),
    component: PrivacityAndSecurityScreen,
  },
];

function renderScreens() {
  const items = [];
  for (var i = 0; i < itemsData.length; i++) {
    items.push(renderScreen(i));
  }

  return items;
}

function renderScreen(i) {
  return (
    <Drawer.Screen
      name={itemsData[i].route}
      key={itemsData[i].route}
      component={itemsData[i].component}
    />
  );
}

const Drawer = createDrawerNavigator();

export function Routes() {
  const screens = renderScreens();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'permanent',
          drawerContentContainerStyle: {
            width: 300,
            backgroundColor: '#f0f3f9',
          },
          drawerStyle: {
            width: 300,
            backgroundColor: '#f0f3f9',
          },
        }}
        drawerContent={props => <Navbar {...props} />}>
        {/* <Drawer.Screen name={'System'} component={AccountScreen} /> */}
        {screens}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
