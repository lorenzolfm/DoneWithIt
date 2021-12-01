import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row', // Horizontal
        justifyContent: 'center',  // Main axis
        alignItems: 'center', // Secondary axis
        flexWrap: 'wrap',
      }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'grey',
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: 'greenyellow',
        width: 100,
        height: 100,
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // View is flexible, will fill all the available space.
    backgroundColor: Platform.OS === 'android' ? '#fff' : '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
