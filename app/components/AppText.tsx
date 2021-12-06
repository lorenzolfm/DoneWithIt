import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

type AppTextProps = {
  children?: React.ReactNode,
};

export const AppText = ({ children }: AppTextProps) => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
};


const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto',
      },
})
  }
})
