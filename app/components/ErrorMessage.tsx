import React from 'react';
import { StyleSheet } from 'react-native';

import { AppText } from './AppText';

type Props = {
  error?: string,
};

export const ErrorMessage = ({ error }: Props) => {
  if (!error) return null;

  return (
    <AppText style={styles.error}>Hello World</AppText>
  );
};

const styles = StyleSheet.create({
  error: { color: 'red' },
});
