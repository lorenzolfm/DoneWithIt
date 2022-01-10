import { create } from 'react-test-renderer';
import { AppTextInput } from '../../app/components/AppTextInput';

describe('AppTextInput', () => {
  it('snapshot matches', () => {
    expect(create(<AppTextInput />)).toMatchSnapshot();
  });
});
