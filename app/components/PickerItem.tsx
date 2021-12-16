import React from 'react';
import { GestureResponderEvent, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText } from './AppText';

type Props = {
  item: any,
  onPress: (event: GestureResponderEvent) => void,
  label?: string,
};
export const PickerItem = ({ item, onPress, label }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label ? label : item.label }</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
