import { shallow } from 'enzyme';
import { MessagesScreen } from '../../app/screens/MessagesScreen';

describe('MessagesScreen', () => {
  it('snapshot matches', () => {
    expect(shallow(<MessagesScreen />)).toMatchSnapshot();
  });
});
