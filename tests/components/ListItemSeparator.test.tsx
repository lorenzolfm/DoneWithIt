import { create } from 'react-test-renderer';
import { ListItemSeparator } from '../../app/components/ListItemSeparator';

describe('ListItemSeparator', () => {
  it('snapshot matches', () => {
    expect(create(<ListItemSeparator />)).toMatchSnapshot();
  });
});
