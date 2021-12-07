import { shallow } from 'enzyme';
import { Screen } from '../../app/components/Screen';

describe('Screen', () => {
  it('snapshot matches', () => {
    expect(shallow(<Screen />)).toMatchSnapshot();
  });
});
