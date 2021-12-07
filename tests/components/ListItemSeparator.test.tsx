import { shallow } from 'enzyme';
import { ListItemSeparator } from '../../app/components/ListItemSeparator';

describe('ListItemSeparator', () => {
  it('snapshot matches', () => {
    expect(shallow(<ListItemSeparator />)).toMatchSnapshot();
  });
});
