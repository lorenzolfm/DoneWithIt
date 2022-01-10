import { create } from 'react-test-renderer';
import { RegisterScreen } from '../../app/screens/RegisterScreen';

describe('RegisterScreen', () => {
  it('snapshot matches', () => {
    expect(create(<RegisterScreen />)).toMatchSnapshot();
  });
});
