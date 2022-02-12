import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { navigationTheme } from './app/navigation/navigationTheme';
import { AppNavigator } from './app/navigation/AppNavigator';
import { OfflineNotice } from './app/components/OfflineNotice';
import { AuthNavigator } from './app/navigation/AuthNavigator';
import { AuthContext } from './app/auth/context';
import { User, UserState } from './app/types';


export default function App() {
  const [user, setUser] = useState<User>();

  return (
    <AuthContext.Provider value={{ user, setUser } as UserState}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
};
