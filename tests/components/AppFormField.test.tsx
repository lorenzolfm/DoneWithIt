import { shallow } from 'enzyme';
import { Formik } from 'formik';
import { AppFormField } from '../../app/components/AppFormField';

describe('AppFormField', () => {
  it('snapshot matches', () => {
    const initialValues = {
      email: '',
      password: '',
    };
    expect(shallow(
      <Formik initialValues={initialValues} onSubmit={jest.fn()}>
        <AppFormField name="test" />
      </Formik>
    )).toMatchSnapshot();
  });
});
