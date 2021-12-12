import { shallow } from 'enzyme';
import { LoginScreen } from '../../app/screens/LoginScreen';

describe('LoginScreen', () => {
  it('snapshot matches', () => {
    expect(shallow(<LoginScreen />)).toMatchSnapshot();
  });
});
