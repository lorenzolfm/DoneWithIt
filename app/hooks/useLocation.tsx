import { useEffect, useState } from 'react';
import * as ExpoLocation from 'expo-location';
import { Location } from '../types';

export const useLocation = (): Location | undefined => {
  const [location, setLocation] = useState<Location | undefined>();

  const getLocation = async () => {
    try {
      const { granted } = await ExpoLocation.requestForegroundPermissionsAsync();
      if (!granted) return;

      const { coords: { latitude, longitude } } =
        (await ExpoLocation.getLastKnownPositionAsync()) as ExpoLocation.LocationObject;

      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
