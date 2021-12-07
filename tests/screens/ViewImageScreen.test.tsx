import { shallow } from "enzyme";
import { ViewImageScreen } from "../../app/screens/ViewImageScreen";

describe('ViewImageScreen', () => {
  it('snapshot matches', () => {
    expect(shallow(<ViewImageScreen />)).toMatchSnapshot();
  });
});
