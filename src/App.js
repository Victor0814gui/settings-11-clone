import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useEffect, useState} from 'react';
import {Navbar} from './components/navbar';
import {useStorageProviderContext} from './contexts/storage-context';

const Section = () => (
  <View style={styles.section}>
    <Text style={[styles.icon, styles.iconLarge]}>&#xE8C7;</Text>
    <View style={{marginLeft: 12}}>
      <Text style={styles.sectionContentTitle}>Microsoft 365 Family</Text>
      <Text style={styles.sectionContentDescription}>
        Premiun office apps, OneDrive cloud storage, and more
      </Text>
    </View>
  </View>
);

export function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const {handlerCreateNewNote} = useStorageProviderContext();

  const handlerCreateNewNoteFn = async () => {
    await handlerCreateNewNote({
      title,
      description,
    });
  };

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.backButton}>
        <Text style={styles.icon}>&#xEC52;</Text>
      </View>
      <View style={styles.container}>
        <Navbar />
        <View style={styles.content}>
          <View style={styles.navigationPivotContainer}>
            <Text style={styles.navigationPivotContainerText}>Accounts</Text>
            <Text style={[styles.icon, styles.iconLarge]}>&#xE76C;</Text>
            <Text
              style={[
                styles.navigationPivotContainerText,
                styles.navigationPivotContainerTextActive,
              ]}>
              Your Microsoft account
            </Text>
          </View>
          {[1, 2, 4, 5, 6].map(e => (
            <>
              <Text style={styles.sectionTitle}>Your subscriptions</Text>
              <Section />
              <Section />
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
  section: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 21,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 5,
    // borderColor: '#9a9997',
    marginVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionContentTitle: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  sectionContentDescription: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '500',
  },
});
