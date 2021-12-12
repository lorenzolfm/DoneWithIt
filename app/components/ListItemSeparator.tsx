import React from 'react';
import { View } from 'react-native';

import defaultStyles from '../config/styles';

export const ListItemSeparator = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: defaultStyles.colors.light,
      }}
    />
  );
};
