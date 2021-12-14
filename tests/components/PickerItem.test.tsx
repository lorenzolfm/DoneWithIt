import { shallow } from 'enzyme';
import { PickerItem } from '../../app/components/PickerItem';

describe('PickerItem', () => {
  const item ={ label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' };

  it('snapshot matches', () => {
    expect(shallow(<PickerItem item={item} onPress={jest.fn()} />)).toMatchSnapshot();
  });
});
