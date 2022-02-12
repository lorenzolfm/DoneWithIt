import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading';

import { navigationTheme } from './app/navigation/navigationTheme';
import { AppNavigator } from './app/navigation/AppNavigator';
import { OfflineNotice } from './app/components/OfflineNotice';
import { AuthNavigator } from './app/navigation/AuthNavigator';
import { AuthContext } from './app/auth/context';
import { TUser, UserState } from './app/types';
import { getToken } from './app/auth/storage';


export default function App() {
  const [user, setUser] = useState<TUser>(null);
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await getToken();

    if (!token)
      return;

    setUser(jwtDecode(token));
  }

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={() => console.log('Error')}
      />
    )
  return (
    <AuthContext.Provider value={{ user, setUser } as UserState}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
};
