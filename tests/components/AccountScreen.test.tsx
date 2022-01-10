import { shallow } from 'enzyme';
import { AccountScreen } from '../../app/screens/AccountScreen';
import { props } from '../../jest/testProps';

describe('AccountScreen', () => {
  it('snapshot matches', () => {
    expect(shallow(<AccountScreen {...props} />)).toMatchSnapshot();
  });
});
