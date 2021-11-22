import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
 SafeAreaView, StyleSheet, Text,
 Image, TouchableWithoutFeedback, 
 TouchableOpacity, View, Button,
 Alert, Platform,
} from 'react-native';

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

  const ViewComponent = (
    // div equivalent
    <View style={{ width: 200, height: 70, backgroundColor: 'dodgerblue' }}/>
  );

  const TextComponent = (
    // h1,h2, ..., p equivalent
    <Text numberOfLines={1} onPress={() => Alert.alert('Text Pressed!')}>
      Open up App.tsx to start working on your app!
    </Text>
  );

  const ImageComponent = (
    // Used to display an image
    <Image
      blurRadius={10} // Blurry images
      fadeDuration={1000} // Fades the image in
      //resizeMode={...} How to resize the image if container is not the same size as image
      source={require('./assets/icon.png')}
      style={{ width: 50, height: 50 }}
    />
  );

  const Touchables = (
    // So we can handle press events
    <>
      <TouchableWithoutFeedback onPress={() => Alert.alert('Image pressed!')}>
        {ImageComponent}
      </TouchableWithoutFeedback>

      <TouchableOpacity onPress={() => Alert.alert('View pressed!')}>
        {ViewComponent}
      </TouchableOpacity>
    </>
  );

  const ButtonComponent = (
    // A fancy button
    <Button title="Click Me" onPress={() => alert('Button tapped')} />
  );

  return ( // A JSX expression
    <SafeAreaView style={styles.container}>
      {/* A safe area view display the content only in the visible part of the device */}
      {TextComponent}
      {Touchables}
      {ButtonComponent}
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
