import { create } from 'react-test-renderer';
import { ListItemDeleteAction } from '../../app/components/ListItemDeleteAction';

describe('ListItemDeleteAction', () => {
  it('snapshot matches', () => {
    expect(create(<ListItemDeleteAction />)).toMatchSnapshot();
  });
});
