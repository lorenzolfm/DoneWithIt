import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading';

import { navigationTheme } from './app/navigation/navigationTheme';
import { AppNavigator } from './app/navigation/AppNavigator';
import { OfflineNotice } from './app/components/OfflineNotice';
import { AuthNavigator } from './app/navigation/AuthNavigator';
import { AuthContext } from './app/auth/context';
import { TUser, UserState } from './app/types';
import { getUser } from './app/auth/storage';


export default function App() {
  const [user, setUser] = useState<TUser>(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await getUser();

    if (!user)
      return;

    setUser(user);
  }

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={() => console.log('Error')}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser } as UserState}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
};
