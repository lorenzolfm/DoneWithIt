import { create } from "react-test-renderer";
import { ViewImageScreen } from "../../app/screens/ViewImageScreen";

describe('ViewImageScreen', () => {
  it('snapshot matches', () => {
    expect(create(<ViewImageScreen />)).toMatchSnapshot();
  });
});
