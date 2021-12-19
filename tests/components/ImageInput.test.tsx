import { shallow } from 'enzyme';
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { ImageInput } from '../../app/components/ImageInput';

describe('ImageInput', () => {
  jest.mock('expo-image-picker', () => {
    return {
      requestMediaLibraryPermissionsAsync: jest.fn(),
      launchImageLibraryAsync: jest.fn(),
      MediaTypeOptions: jest.fn(),
    };
  });
  it('snapshot matches', () => {
    expect(shallow(<ImageInput onChangeImage={() => jest.fn()} />)).toMatchSnapshot();
  });
});
