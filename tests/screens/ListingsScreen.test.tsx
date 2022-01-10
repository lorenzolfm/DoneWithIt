import { ListingsScreen } from '../../app/screens/ListingsScreen';
import { props } from '../../jest/testProps'
import { shallow } from 'enzyme'

describe('ListingsScreen', () => {
  it('snapshot matches', () => {
    expect(shallow(<ListingsScreen {...props} />)).toMatchSnapshot();
  });
});
