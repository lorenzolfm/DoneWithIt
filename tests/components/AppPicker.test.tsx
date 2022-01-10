import { create } from 'react-test-renderer';
import { AppPicker } from '../../app/components/AppPicker';

describe('AppPicker', () => {
  it('snapshot matches', () => {
    expect(create(<AppPicker />)).toMatchSnapshot();
  });
});
