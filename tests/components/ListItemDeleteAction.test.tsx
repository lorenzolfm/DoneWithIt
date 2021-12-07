import { shallow } from 'enzyme';
import { ListItemDeleteAction } from '../../app/components/ListItemDeleteAction';

describe('ListItemDeleteAction', () => {
  it('snapshot matches', () => {
    expect(shallow(<ListItemDeleteAction />)).toMatchSnapshot();
  });
});
