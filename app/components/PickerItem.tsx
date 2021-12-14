import React from 'react';
import { GestureResponderEvent, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText } from './AppText';

type Props = {
  item: any,
  onPress: (event: GestureResponderEvent) => void,
};
export const PickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
