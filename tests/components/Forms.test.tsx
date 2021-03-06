import { create } from 'react-test-renderer';
import { Formik } from 'formik';
import { View } from 'react-native';
import { AppForm, AppFormField, AppFormPicker, ErrorMessage, SubmitButton, FormImagePicker } from '../../app/components/Forms';

describe('Forms', () => {
  const initialValues = {
    email: '',
    password: '',
  };
  it('AppForm snapshot matches', () => {
    expect(create(
      <AppForm initialValues={initialValues} onSubmit={jest.fn()} />
    )).toMatchSnapshot();
  });

  it('AppFormField snapshot matches', () => {
    expect(create(
      <Formik initialValues={initialValues} onSubmit={jest.fn()}>
        <AppFormField name="test" />
      </Formik>
    )).toMatchSnapshot();
  });

  it('AppFormPicker snapshot matches', () => {
    expect(create(
      <Formik initialValues={initialValues} onSubmit={jest.fn()}>
        <AppFormPicker name="test" PickerItemComponent={<View />} numberOfColumns={1} />
      </Formik>
    ));
  });

  it('Error Message snapshot matches', () => {
    expect(create(<ErrorMessage visible />)).toMatchSnapshot();
  });

  it('SubmitButton snapshot matches', () => {
    expect(create(
      <Formik initialValues={initialValues} onSubmit={jest.fn()}>
        <SubmitButton title="test" />
      </Formik>
    )).toMatchSnapshot();
  });

  it('FormImagePicker snapshot matches', () => {
    expect(create(
      <Formik initialValues={initialValues} onSubmit={jest.fn()}>
        <FormImagePicker name="test" />
      </Formik>
    )).toMatchSnapshot();

  });
});
