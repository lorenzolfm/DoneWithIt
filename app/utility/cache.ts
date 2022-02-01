import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment';

const expiryInMinutes = 5;
const prefix = 'cache';

interface Item {
  timestamp: Date,
}

export const store = async (key: string, value: Object): Promise<void> => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    }
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  }
  catch (error) {
    console.log(error);
  }
}

export const getFromCache = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    if (!value) return null;

    const item = JSON.parse(value);

    if (isExperid(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  }
  catch (error) {
    console.log(error)
  }
}

const isExperid = (item: Item): boolean => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp)
    return now.diff(storedTime, 'minutes') > expiryInMinutes
}
