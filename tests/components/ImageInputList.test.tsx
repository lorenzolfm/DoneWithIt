import { create } from 'react-test-renderer'
import { ImageInputList } from '../../app/components/ImageInputList'

describe('ImageInputList', () => {
  it('snapshot matches', () => {
    expect(create(<ImageInputList />)).toMatchSnapshot();
  });
});
