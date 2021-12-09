import { shallow } from 'enzyme';
import { AccountScreen } from '../../app/screens/AccountScreen';

describe('AccountScreen', () => {
  it('snapshot matches', () => {
    expect(shallow(<AccountScreen />)).toMatchSnapshot();
  });
});
