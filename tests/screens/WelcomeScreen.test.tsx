import { shallow } from 'enzyme';
import { WelcomeScreen } from '../../app/screens/WelcomeScreen';

describe('WelcomeScreen', () => {
  it('matches snapshot', () => {
    expect(shallow(<WelcomeScreen />)).toMatchSnapshot();
  });
});
