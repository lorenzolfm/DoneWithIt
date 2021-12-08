import { shallow } from 'enzyme';
import { Icon } from '../../app/components/Icon';

describe('Icon', () => {
  it('snapshot matches', () => {
    expect(shallow(<Icon name="test" />)).toMatchSnapshot();
  });
});
