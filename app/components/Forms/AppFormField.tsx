import React from 'react';
import { useFormikContext } from 'formik';

import { AppTextInput } from '../AppTextInput';
import { ErrorMessage } from './ErrorMessage';

import { IIndexable } from '../../types';

type Props = {
  name: string,
  width?: number | string,
  [otherProp: string]: any,
};

export const AppFormField = ({ name, width = '100%', ...otherProps }: Props) => {
  const { setFieldTouched, setFieldValue, values, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: string) => setFieldValue(name, text)}
        value={(values as IIndexable)[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={(errors as IIndexable)[name]} visible={(touched as IIndexable)[name]} />
    </>
  );
};
