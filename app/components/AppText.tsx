import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

type AppTextProps = {
  children?: React.ReactNode,
  style?: object,
};

export const AppText = ({ children, style }: AppTextProps) => {
  return (
    <Text style={[defaultStyles.text, style]}>{children}</Text>
  );
};
