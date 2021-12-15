import React from 'react';
import { useFormikContext } from 'formik';

import { ErrorMessage } from './ErrorMessage';
import { ImageInputList } from '../ImageInputList';

type Props = { name: string, };
export const FormImagePicker = ({ name }: Props) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  }

  const handleRemove = (uri: string) => {
    setFieldValue(name, imagesUris.filter((imageUri: string) => imageUri !== uri));
  };

  return (
    <>
      <ImageInputList 
        imageUris={imagesUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
};
