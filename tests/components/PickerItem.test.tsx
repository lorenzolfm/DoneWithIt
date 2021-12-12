import { shallow } from 'enzyme';
import { PickerItem } from '../../app/components/PickerItem';

describe('PickerItem', () => {
  it('snapshot matches', () => {
    expect(shallow(<PickerItem label="test" onPress={jest.fn()} />)).toMatchSnapshot();
  });
});
