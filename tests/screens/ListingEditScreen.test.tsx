import { create } from 'react-test-renderer';
import { ListingEditScreen } from '../../app/screens/ListingEditScreen';
import { props } from '../../jest/testProps';

describe('ListingEditScreen', () => {
  it('snapshot matches', () => {
    expect(create(<ListingEditScreen {...props}/>)).toMatchSnapshot();
  });
});
