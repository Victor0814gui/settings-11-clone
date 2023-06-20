import {createContext, useContext, useEffect, useState} from 'react';

import {v4 as uuidV4} from 'uuid';
import SInfo from 'react-native-sensitive-info';
import {App} from '../App';

const StorageContext = createContext({});

const useStorageProviderContext = () => {
  const useStorageContextAlreadyExists = useContext(StorageContext);
  if (!useStorageContextAlreadyExists) {
    throw new Error('[useStorageProviderContext] context not exists');
  }
  return useStorageContextAlreadyExists;
};

const StorageContextProvider = () => {
  const [allItem, setAllItems] = useState([]);

  const handlerCreateNewNote = async ({title, description}) => {
    const id = uuidV4();
    const noteData = {
      id,
      title,
      description,
    };
    const transformObejctToString = JSON.stringify(noteData);

    try {
      await SInfo.setItem(id, transformObejctToString, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
      });

      setAllItems([...allItem, noteData]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getStorageItems = async () => {
    try {
      const gettingAllKeys = await SInfo.getAllItems({
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
      });
      const storageData = [];

      for (const [key, value] of Object.entries(gettingAllKeys)) {
        const allItemTransformStringInObject = await JSON.parse(value);
        await storageData.push(allItemTransformStringInObject);
      }

      setAllItems(storageData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getStorageItems();
  }, []);

  return (
    <StorageContext.Provider
      value={{
        allItem,
        handlerCreateNewNote,
        getStorageItems,
      }}>
      <App />
    </StorageContext.Provider>
  );
};

export {StorageContextProvider, useStorageProviderContext};
