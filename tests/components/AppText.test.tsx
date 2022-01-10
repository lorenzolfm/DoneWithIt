import { create } from 'react-test-renderer'
import { AppText } from '../../app/components/AppText';

describe('AppText', () => {
  it('matches snapshot', () => {
    expect(create(<AppText>Test</AppText>)).toMatchSnapshot()
  });
});
