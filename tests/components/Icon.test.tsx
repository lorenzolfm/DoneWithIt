import { create } from 'react-test-renderer';
import { Icon } from '../../app/components/Icon';

describe('Icon', () => {
  it('snapshot matches', () => {
    expect(create(<Icon name="test" />)).toMatchSnapshot();
  });
});
