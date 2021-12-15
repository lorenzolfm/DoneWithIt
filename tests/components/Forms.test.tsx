import { shallow } from 'enzyme';
import { Formik } from 'formik';
import { AppForm, AppFormField, AppFormPicker, ErrorMessage, SubmitButton, FormImagePicker } from '../../app/components/Forms';

describe('Forms', () => {
  const initialValues = {
    email: '',
    password: '',
  };
  it('AppForm snapshot matches', () => {
    expect(shallow(
      <AppForm initialValues={initialValues} onSubmit={jest.fn()} />
    )).toMatchSnapshot();
  });

  it('AppFormField snapshot matches', () => {
    expect(shallow(
      <Formik initialValues={initialValues} onSubmit={jest.fn()}>
        <AppFormField name="test" />
      </Formik>
    )).toMatchSnapshot();
  });

  it('AppFormPicker snapshot matches', () => {
    expect(shallow(
      <Formik initialValues={initialValues} onSubmit={jest.fn()}>
        <AppFormPicker name="test" />
      </Formik>
    ));
  });

  it('Error Message snapshot matches', () => {
    expect(shallow(<ErrorMessage visible />)).toMatchSnapshot();
  });

  it('SubmitButton snapshot matches', () => {
    expect(shallow(
      <Formik initialValues={initialValues} onSubmit={jest.fn()}>
        <SubmitButton title="test"/>
      </Formik>
    )).toMatchSnapshot();
  });

  it('FormImagePicker snapshot matches', () => {
    expect(shallow(<FormImagePicker />)).toMatchSnapshot();
  });
});
