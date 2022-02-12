import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

type Props = { visible: boolean }

export const ActivityIndicator = ({ visible = false }: Props) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay:  {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.8,
  }
})
