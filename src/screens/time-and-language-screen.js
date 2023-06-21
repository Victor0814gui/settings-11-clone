import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useEffect, useState} from 'react';
import {Navbar} from '../components/navbar';
import {useStorageProviderContext} from '../contexts/storage-context';
import {Section} from '../components/section';

export function TimeAndLanguageScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlerCreateNewNoteFn = async () => {};

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.navigationPivotContainer}>
            <Text style={styles.navigationPivotContainerText}>
              Time & Language
            </Text>
            <Text style={[styles.icon, styles.iconLarge]}>&#xE76C;</Text>
            <Text
              style={[
                styles.navigationPivotContainerText,
                styles.navigationPivotContainerTextActive,
              ]}>
              Your Microsoft account
            </Text>
          </View>
          <Text style={styles.sectionTitle}>Your subscriptions</Text>
          {[1, 2, 4, 5, 6].map(e => (
            <>
              <Section />
            </>
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
  sectionTitle: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
    marginBottom: 12,
    marginTop: 21,
  },
});
