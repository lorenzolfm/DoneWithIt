import { shallow } from 'enzyme';
import { AppForm } from '../../app/components/AppForm';

describe('AppForm', () => {
  const initialValues = {
    email: '',
    password: '',
  };
  it('snapshot matches', () => {
    expect(shallow(
      <AppForm initialValues={initialValues} onSubmit={jest.fn()} />
    )).toMatchSnapshot();
  });
});
