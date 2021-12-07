import React from 'react';
import { SafeAreaView, Platform, StyleSheet, StatusBar } from "react-native"

type ScreenProps = { children?: React.ReactNode }
export const Screen = ({ children }: ScreenProps) => {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ?
      StatusBar.currentHeight : 0,
    flex: 1,
  },
});
