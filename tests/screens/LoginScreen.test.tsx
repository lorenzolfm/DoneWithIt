import { create } from 'react-test-renderer';
import { LoginScreen } from '../../app/screens/LoginScreen';

describe('LoginScreen', () => {
  it('snapshot matches', () => {
    expect(create(<LoginScreen />)).toMatchSnapshot();
  });
});
