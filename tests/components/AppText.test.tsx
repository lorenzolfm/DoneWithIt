import { shallow } from 'enzyme'
import { AppText } from '../../app/components/AppText';

describe('AppText', () => {
  it('matches snapshot', () => {
    expect(shallow(<AppText>Test</AppText>)).toMatchSnapshot()
  });
});
