import React from 'react';
import { useFormikContext } from 'formik';

import { ErrorMessage } from './ErrorMessage';
import { ImageInputList } from '../ImageInputList';

import { IIndexable } from '../../types';

type Props = { name: string, };
export const FormImagePicker = ({ name }: Props) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageUris = (values as IIndexable)[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  }

  const handleRemove = (uri: string) => {
    setFieldValue(name, imageUris.filter((imageUri: string) => imageUri !== uri));
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={(errors as IIndexable)[name]} visible={(touched as IIndexable)[name]} />
    </>
  );
};
