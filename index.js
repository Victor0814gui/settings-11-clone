/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {StorageContextProvider} from './src/contexts/storage-context';

AppRegistry.registerComponent(appName, () => StorageContextProvider);
