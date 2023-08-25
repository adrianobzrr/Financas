import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
  storeData: async (key, data) => {
    try {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonData);
      console.log('Dados armazenados com sucesso.');
    } catch (error) {
      console.error('Erro ao armazenar os dados:', error);
    }
  },

  getData: async key => {
    try {
      const jsonData = await AsyncStorage.getItem(key);
      if (jsonData !== null) {
        const data = JSON.parse(jsonData);
        return data;
      }
    } catch (error) {
      console.error('Erro ao recuperar os dados:', error);
    }
  },
};

export default Storage;
