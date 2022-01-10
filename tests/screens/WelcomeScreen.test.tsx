import { shallow } from 'enzyme';
import { WelcomeScreen } from '../../app/screens/WelcomeScreen';
import { props } from '../../jest/testProps';

describe('WelcomeScreen', () => {
  it('matches snapshot', () => {
    expect(shallow(<WelcomeScreen {...props} />)).toMatchSnapshot();
  });
});
