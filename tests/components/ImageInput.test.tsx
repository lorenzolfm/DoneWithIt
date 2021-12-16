import { shallow } from 'enzyme';
import { ImageInput } from '../../app/components/ImageInput';

describe('ImageInput', () => {
  it('snapshot matches', () => {
    expect(shallow(<ImageInput onChangeImage={() => jest.fn()} />)).toMatchSnapshot();
  });
});
