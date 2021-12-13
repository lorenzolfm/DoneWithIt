import { shallow } from 'enzyme';
import { Formik } from 'formik';
import { SubmitButton } from '../../app/components/SubmitButton';

describe('SubmitButton', () => {
  it('snapshot matches', () => {
    const initialValues = {
      email: '',
      password: '',
    };
    expect(shallow(
      <Formik initialValues={initialValues} onSubmit={jest.fn()}>
        <SubmitButton title="test"/>
      </Formik>
    )).toMatchSnapshot();
  });
});
