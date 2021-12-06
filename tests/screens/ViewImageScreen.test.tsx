import { shallow } from "enzyme";
import { ViewImageScreen } from "../../app/screens/ViewImageScreen";

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    MaterialCommunityIcons: View,
  }
});

describe('ViewImageScreen', () => {
  it('snapshot matches', () => {
    expect(shallow(<ViewImageScreen />)).toMatchSnapshot();
  });
});
