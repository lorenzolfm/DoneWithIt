import { create } from 'react-test-renderer'
import { Button } from '../../app/components/Button';

describe('Button', () => {
  it('snapshot matches', () => {
    const onPress = jest.fn();
    expect(
      create(<Button title="test" onPress={onPress} />)
    ).toMatchSnapshot();
  });
});
