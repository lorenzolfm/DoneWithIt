import { shallow } from 'enzyme';
import { ErrorMessage } from '../../app/components/ErrorMessage';

describe('Error Message', () => {
  it('snapshot matches', () => {
    expect(shallow(<ErrorMessage />)).toMatchSnapshot();
  });
});
