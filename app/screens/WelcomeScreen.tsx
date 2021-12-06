import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import { Button } from '../components/Button';

export const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => console.log('Login')} />
        <Button title="Register" onPress={() => console.log('register')} color="secondary"/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
});
