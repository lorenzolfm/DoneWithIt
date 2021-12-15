import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';

import { AppText } from './AppText';
import { Icon } from './Icon';

type Props = {
  item: any
  onPress: (event: GestureResponderEvent) => void,
}

export const CategoryPickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
