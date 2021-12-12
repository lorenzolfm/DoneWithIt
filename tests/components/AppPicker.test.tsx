import { shallow } from 'enzyme';
import { AppPicker } from '../../app/components/AppPicker';

describe('AppPicker', () => {
  it('snapshot matches', () => {
    expect(shallow(<AppPicker />)).toMatchSnapshot();
  });
});
