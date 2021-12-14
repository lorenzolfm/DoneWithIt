import { shallow } from 'enzyme';
import { CategoryPickerItem } from '../../app/components/CategoryPickerItem';

describe('CategoryPickerItem', () => {
  const item ={ label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' };

  it('snapshot matches', () => {
    expect(shallow(<CategoryPickerItem item={item} onPress={jest.fn()} />)).toMatchSnapshot();
  });
});
