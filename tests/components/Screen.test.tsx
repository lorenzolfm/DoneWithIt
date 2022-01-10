import { create } from 'react-test-renderer';
import { Screen } from '../../app/components/Screen';

describe('Screen', () => {
  it('snapshot matches', () => {
    expect(create(<Screen />)).toMatchSnapshot();
  });
});
