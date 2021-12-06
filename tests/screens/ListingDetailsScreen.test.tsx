import { shallow } from 'enzyme';
import { ListingDetailsScreen } from '../../app/screens/ListingDetailsScreen';

describe('ListingDetailsScreen', () => {
  it('snapshot matches', () => {
    expect(shallow(<ListingDetailsScreen />)).toMatchSnapshot();
  });
});
