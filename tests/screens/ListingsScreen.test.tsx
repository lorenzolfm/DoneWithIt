import { shallow } from 'enzyme';
import { ListingsScreen } from '../../app/screens/ListingsScreen';

describe('ListingsScreen', () => {
  it('snapshot matches', () => {
    expect(shallow(<ListingsScreen />)).toMatchSnapshot();
  });
});
