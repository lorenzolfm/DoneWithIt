import { shallow } from 'enzyme';
import { AppTextInput } from '../../app/components/AppTextInput';

describe('AppTextInput', () => {
  it('snapshot matches', () => {
    expect(shallow(<AppTextInput />)).toMatchSnapshot();
  });
});
