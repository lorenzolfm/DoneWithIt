import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* NOTES:
 * View: 'div' for the mobile world
 * Text: used for displaying text
 *
 * In the mobile world, when using react-native, we have to use the components provided by them.
 * We add styles to components via the "style" prop.
 *
 * When we compile our app, the components will be compiled to their native widgets
 */

export default function App() {
  console.log('App executed') // Check the terminal!

  return ( // A JSX expression
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
