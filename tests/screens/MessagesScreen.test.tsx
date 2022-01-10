import { create } from 'react-test-renderer';
import { MessagesScreen } from '../../app/screens/MessagesScreen';

describe('MessagesScreen', () => {
  it('snapshot matches', () => {
    expect(create(<MessagesScreen />)).toMatchSnapshot();
  });
});
