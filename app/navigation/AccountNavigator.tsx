import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { MessagesScreen } from '../screens/MessagesScreen';
import { AccountScreen } from '../screens/AccountScreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="AccountComponent" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);
