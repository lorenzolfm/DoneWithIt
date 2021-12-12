import React from 'react';

import { AppPicker } from './app/components/AppPicker';
import { AppTextInput } from './app/components/AppTextInput';
import { Screen } from './app/components/Screen';

import { Category } from './app/types';

const categories: Category[] = [
  { label: 'Furniture', value: 1 },
  { label: 'clothing', value: 2 },
  { label: 'cameras', value: 3 },
];

export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
};
