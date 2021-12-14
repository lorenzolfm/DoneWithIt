import React from 'react';
import { useFormikContext } from 'formik';

import { Category } from '../../types'
import { AppPicker } from '../AppPicker';
import { ErrorMessage } from './ErrorMessage';

type Props = {
  items?: Category[],
  name: string,
  width?: number | string,
  placeholder?: string,
};
export const AppFormPicker = ({ items, name, width = '100%', placeholder }: Props) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item: Category) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
