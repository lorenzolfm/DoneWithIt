import React from 'react';
import { StyleSheet } from 'react-native';

import { AppText } from './AppText';

type Props = {
  error?: string,
  visible: boolean | undefined,
};

export const ErrorMessage = ({ error, visible }: Props) => {
  if (!visible || !error) return null;

  return (
    <AppText style={styles.error}>{error}</AppText>
  );
};

const styles = StyleSheet.create({
  error: { color: 'red' },
});
