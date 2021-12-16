import React from 'react';
import { useFormikContext } from 'formik';

import { AppTextInput } from '../AppTextInput';
import { ErrorMessage } from './ErrorMessage';

type Props = {
  name: string,
  width?: number | string,
  [otherProp: string]: any,
};

interface IIndexable {
  [key: string]: any,
};
export const AppFormField = ({ name, width = '100%', ...otherProps }: Props) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlurEvent={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={(errors as IIndexable)[name]} visible={(touched as IIndexable)[name]} />
    </>
  );
};
