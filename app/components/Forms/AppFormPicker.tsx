import React from 'react';
import { useFormikContext } from 'formik';

import { Category } from '../../types'
import { AppPicker } from '../AppPicker';
import { ErrorMessage } from './ErrorMessage';
import { PickerItem } from '../PickerItem';

import { IIndexable } from '../../types';

type Props = {
  items?: Category[],
  name: string,
  width?: number | string,
  placeholder?: string,
  PickerItemComponent: React.ReactNode,
  numberOfColumns: number
};
export const AppFormPicker = ({ items, name, numberOfColumns, width = '100%', placeholder, PickerItemComponent = PickerItem }: Props) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item: Category) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={(values as IIndexable)[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={(errors as IIndexable)[name]} visible={(touched as IIndexable)[name]} />
    </>
  );
};
