import React from 'react';
import { useFormikContext } from 'formik';

import { Button } from '../Button';

type Props = { title: string }
export const SubmitButton = ({ title }: Props) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button title={title} onPress={() => handleSubmit()} />
  );
};
