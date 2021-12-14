import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

type AppTextProps = {
  children?: React.ReactNode,
  style?: object,
  [otherProp:string]: any,
};
export const AppText = ({ children, style, ...otherProps }: AppTextProps) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
  );
};
