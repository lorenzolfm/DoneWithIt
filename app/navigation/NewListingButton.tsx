import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = { onPress: () => void, }
export const NewListingButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 10,
    borderRadius: 40,
    bottom: 20,
    justifyContent: 'center',
    height: 80,
    width: 80,
  },
});
