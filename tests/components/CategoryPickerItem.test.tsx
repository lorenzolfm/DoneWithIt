import { create } from 'react-test-renderer';
import { CategoryPickerItem } from '../../app/components/CategoryPickerItem';

describe('CategoryPickerItem', () => {
  const item ={ label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' };

  it('snapshot matches', () => {
    expect(create(<CategoryPickerItem item={item} onPress={jest.fn()} />)).toMatchSnapshot();
  });
});
