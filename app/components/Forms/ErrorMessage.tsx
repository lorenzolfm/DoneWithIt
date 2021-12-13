import React from 'react';
import { StyleSheet } from 'react-native';
import { FormikErrors, FormikTouched } from 'formik';

import { AppText } from '../AppText';

type Props = {
  error?: FormikErrors<unknown>,
  visible: FormikTouched<unknown>,
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
