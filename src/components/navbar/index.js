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

// import {useStorageProviderContext} from '../../contexts/storage-context';
import {NavbarItem} from '../navbar-item';
import {itemsData} from '../../screens';
import {Colors} from '../../theme/colors';

const uri = 'https://avatars.githubusercontent.com/u/2254731?v=4';

export function Navbar({navigation, state}) {
  console.log(state);

  const renderItem = ({item, index}) => (
    <NavbarItem
      active={state.index === index}
      onPress={() => navigation.navigate(item.route)}
      item={item}
      index={index}
      icon={item.icon}
    />
  );

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
              multiline={true}
              placeholder="Search"
              placeholderTextColor={'#888888'}
              style={styles.input}
            />
          </View>
        }
        renderItem={renderItem}
        keyExtractor={(_, index) => `${index}`}
      />
    </View>
  );
}

const iconSize = 22;
const avatarSize = 62;

const styles = StyleSheet.create({
  header: {
    marginBottom: 21,
  },
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
    borderColor: Colors.inputBorder,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 7,
    fontWeight: '500',
    color: Colors.text,
  },
  container: {
    // flex: 1,
    paddingHorizontal: 12,
    width: 300,
    maxWidth: 320,
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
