import { shallow } from 'enzyme'
import { ImageInputList } from '../../app/components/ImageInputList'

describe('ImageInputList', () => {
  it('snapshot matches', () => {
    expect(shallow(<ImageInputList />)).toMatchSnapshot();
  });
});
