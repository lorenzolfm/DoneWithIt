import { shallow } from 'enzyme';
import { ListingEditScreen } from '../../app/screens/ListingEditScreen';

describe('ListingEditScreen', () => {
  it('snapshot matches', () => {
    expect(shallow(<ListingEditScreen />)).toMatchSnapshot();
  });
});
