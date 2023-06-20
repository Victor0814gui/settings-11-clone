import {useEffect, useState} from 'react';
import RNSInfo from 'react-native-sensitive-info';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from 'react-native';

import {useStorageProviderContext} from '../../contexts/storage-context';

const itemsData = [
  {
    routeName: 'System',
    icon: require('../../assets/settings.png'),
  },
  {
    routeName: 'Bluetooth & Devices',
    icon: '',
  },
  {
    routeName: 'Personalization',
    icon: '',
  },
  {
    routeName: 'Apps',
    icon: '',
  },
  {
    routeName: 'Accounts',
    icon: '',
  },
  {
    routeName: 'Time e Language',
    icon: '',
  },
  {
    routeName: 'Gaming',
    icon: '',
  },
  {
    routeName: 'Accessibility',
    icon: '',
  },
  {
    routeName: 'Privacity & Security',
    icon: '',
  },
];

const uri = 'https://avatars.githubusercontent.com/u/2254731?v=4';

export function Navbar() {
  const {allItem} = useStorageProviderContext();

  const handlerDeleteNode = async id => {
    await RNSInfo.deleteItem(id, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={itemsData}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.headerProfileContainer}>
              <Image
                resizeMode="contain"
                style={styles.avatar}
                source={{uri}}
              />
              <View style={styles.headerProfileContent}>
                <Text style={styles.headerProfileContentNickname}>
                  Zac Mendes
                </Text>
                <Text style={styles.headerProfileContentEmail}>
                  zacmendes@outlook.com
                </Text>
              </View>
            </View>
            <TextInput
              placeholder="Search"
              placeholderTextColor={'#888888'}
              style={styles.input}
            />
          </View>
        }
        renderItem={({item, index}) => (
          <View style={[styles.item, index === 4 && styles.itemSelected]}>
            <View
              style={[
                styles.square,
                index !== 4 && {backgroundColor: 'transparent'},
              ]}
            />
            <View style={styles.itemContent}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={itemsData[0].icon}
              />
              <Text numberOfLines={1} style={styles.itemTitle}>
                {item.routeName}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const iconSize = 22;
const avatarSize = 62;

const styles = StyleSheet.create({
  header: {},
  headerProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 21,
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
    borderRadius: avatarSize / 2,
  },
  headerProfileContent: {
    marginLeft: 12,
  },
  headerProfileContentNickname: {
    fontWeight: '500',
    color: '#333333',
    fontSize: 16,
  },
  headerProfileContentEmail: {
    fontWeight: '500',
    color: '#888888',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#ced4d8',
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 7,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    maxWidth: 300,
  },
  item: {
    height: 38,
    borderRadius: 5,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemSelected: {
    backgroundColor: '#e3ebef',
  },
  square: {
    height: 18,
    width: 4,
    // borderRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    backgroundColor: '#05acff',
    marginRight: 7,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: iconSize,
    width: iconSize,
    marginRight: 12,
  },
  itemId: {
    fontWeight: '500',
    color: '#333333',
  },
  itemTitle: {
    fontWeight: '500',
    color: '#333333',
  },
  itemDescription: {
    fontWeight: '400',
    color: '#333333',
  },
});
