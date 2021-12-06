import { shallow } from 'enzyme'
import { Button } from '../../app/components/Button';

describe('Button', () => {
  it('snapshot matches', () => {
    const onPress = jest.fn();
    expect(
      shallow(<Button title="test" onPress={onPress}/>)
    ).toMatchSnapshot();
  });
});
