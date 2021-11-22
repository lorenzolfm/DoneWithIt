import React from 'react';
import {
 SafeAreaView, StyleSheet,
 Platform, View, Dimensions, Text
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

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
  const dim = Dimensions.get('window');
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  return ( // A JSX expression
    <SafeAreaView style={styles.container}>
      {/* A safe area view display the content only in the visible part of the device */}
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 150, // Physical pixels = DIPs x Scale Factor
        height: '10%', // Relative sizes
        }}>
      </View>
      <View>
        <Text>Width: {dim.width}</Text>
        <Text>Height: {dim.height}</Text>
        <Text>Scale: {dim.scale}</Text>
        <Text>FontScale: {dim.fontScale}</Text>
      </View>
    </SafeAreaView>
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
