import { create } from 'react-test-renderer';
import { ListingDetailsScreen } from '../../app/screens/ListingDetailsScreen';

describe('ListingDetailsScreen', () => {
  it('snapshot matches', () => {
    const route = {
      "key": "ListingDetails-2DTQBVxA5QwPCslwJRdCu",
      "name": "ListingDetails",
      "params": {
        "id": 0,
        "image": 19,
        "price": 100,
        "title": "Red jacket for sale",
      },
      "path": undefined,
    }

    expect(create(<ListingDetailsScreen route={route} />)).toMatchSnapshot();
  });
});
