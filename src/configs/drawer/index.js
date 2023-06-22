import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SystemScreen} from '../../screens/system-screen';
import {BluetoothAndDevicesScreen} from '../../screens/bluetooth-and-devices-screen';
import {PersonalizationScreen} from '../../screens/personalization-screen';
import {ApplicationScreen} from '../../screens/applications-screen';
import {AccountScreen} from '../../screens/account-screen';
import {TimeAndLanguageScreen} from '../../screens/time-and-language-screen';
import {GamingScreen} from '../../screens/gaming-screen';
import {AccesibilityScreen} from '../../screens/accesibility-screen';
import {PrivacityAndSecurityScreen} from '../../screens/privacity-and-security-screen';
import {SoundScreen} from '../../screens/system-screen/screen/sound-screen';
import {NotificationsScreen} from '../../screens/system-screen/screen/notifications-screen';
import {DisplayScreen} from '../../screens/system-screen/screen/display-screen';
import {SplashScreen} from '../../screens/splash-screen';

const Drawer = createDrawerNavigator();

export const drawerRoutes = [
  {
    routeName: 'System',
    route: 'System',
    icon: require('../../assets/settings.png'),
    component: SystemScreen,
  },
  {
    routeName: 'Bluetooth & Devices',
    route: 'BluetoothAndDevices',
    icon: require('../../assets/settings.png'),
    component: BluetoothAndDevicesScreen,
  },
  {
    routeName: 'Personalization',
    route: 'Personalization',
    icon: require('../../assets/settings.png'),
    component: PersonalizationScreen,
  },
  {
    routeName: 'Apps',
    route: 'Apps',
    icon: require('../../assets/settings.png'),
    component: ApplicationScreen,
  },
  {
    routeName: 'Accounts',
    route: 'Accounts',
    icon: require('../../assets/accounts-icon.webp'),
    component: AccountScreen,
  },
  {
    routeName: 'Time e Language',
    route: 'TimeAndLanguage',
    icon: require('../../assets/settings.png'),
    component: TimeAndLanguageScreen,
  },
  {
    routeName: 'Gaming',
    route: 'Gaming',
    icon: require('../../assets/settings.png'),
    component: GamingScreen,
  },
  {
    routeName: 'Accessibility',
    route: 'Accessibility',
    icon: require('../../assets/settings.png'),
    component: AccesibilityScreen,
  },
  {
    routeName: 'Privacity & Security',
    route: 'PrivacityAndSecurity',
    icon: require('../../assets/settings.png'),
    component: PrivacityAndSecurityScreen,
  },
];

export const screens = [
  {
    routeName: 'System',
    route: 'System',
    icon: require('../../assets/settings.png'),
    component: SystemScreen,
  },
  {
    routeName: 'Bluetooth & Devices',
    route: 'BluetoothAndDevices',
    icon: require('../../assets/settings.png'),
    component: BluetoothAndDevicesScreen,
  },
  {
    routeName: 'Personalization',
    route: 'Personalization',
    icon: require('../../assets/settings.png'),
    component: PersonalizationScreen,
  },
  {
    routeName: 'Apps',
    route: 'Apps',
    icon: require('../../assets/settings.png'),
    component: ApplicationScreen,
  },
  {
    routeName: 'Accounts',
    route: 'Accounts',
    icon: require('../../assets/settings.png'),
    component: AccountScreen,
  },
  {
    routeName: 'Time e Language',
    route: 'TimeAndLanguage',
    icon: require('../../assets/settings.png'),
    component: TimeAndLanguageScreen,
  },
  {
    routeName: 'Gaming',
    route: 'Gaming',
    icon: require('../../assets/settings.png'),
    component: GamingScreen,
  },
  {
    routeName: 'Accessibility',
    route: 'Accessibility',
    icon: require('../../assets/settings.png'),
    component: AccesibilityScreen,
  },
  {
    routeName: 'Privacity & Security',
    route: 'PrivacityAndSecurity',
    icon: require('../../assets/settings.png'),
    component: PrivacityAndSecurityScreen,
  },
  {
    routeName: 'Sound',
    route: 'Sound',
    icon: require('../../assets/settings.png'),
    component: SoundScreen,
  },
  {
    routeName: 'Notifications',
    route: 'Notifications',
    icon: require('../../assets/settings.png'),
    component: NotificationsScreen,
  },
  {
    routeName: 'Display',
    route: 'Display',
    icon: require('../../assets/settings.png'),
    component: DisplayScreen,
  },
];

export function screensDrawer() {
  const items = [];
  for (var i = 0; i < screens.length; i++) {
    items.push(renderScreen(i));
  }

  return items;
}

function renderScreen(i) {
  return (
    <Drawer.Screen
      name={screens[i].route}
      key={screens[i].route}
      component={screens[i].component}
    />
  );
}
