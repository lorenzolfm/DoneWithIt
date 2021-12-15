import React from 'react';
import { useFormikContext } from 'formik';

import { ErrorMessage } from './ErrorMessage';
import { ImageInputList } from '../ImageInputList';

type Props = { name: string, };
export const FormImagePicker = ({ name }: Props) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...values[name], uri]);
  }

  const handleRemove = (uri: string) => {
    setFieldValue(name, values[name].filter((imageUri: string) => imageUri !== uri));
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
