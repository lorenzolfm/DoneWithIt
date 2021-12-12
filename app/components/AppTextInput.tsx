import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

type Props = {
  icon?: any,
  otherProps?: object,
  placeholder?: string,
};
export const AppTextInput = ({ icon, placeholder }: Props) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
      <TextInput style={defaultStyles.text} placeholder={placeholder}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  }
});
