import React from 'react';
import { AppTextInput } from './app/components/AppTextInput';
import { Screen } from './app/components/Screen';

import { ListingsScreen } from './app/screens/ListingsScreen';

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email"/>
    </Screen>
  );
};
