import React from 'react';
import { GestureResponderEvent, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText } from './AppText';

type Props = {
  label: string,
  onPress: (event: GestureResponderEvent) => void,
};
export const PickerItem = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
