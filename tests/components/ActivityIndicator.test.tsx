import { shallow } from "enzyme"
import { ActivityIndicator } from "../../app/components/ActivityIndicator";

describe('ActivityIndicator', () => {
  it('snapshot matches', () => {
    expect(shallow(<ActivityIndicator visible={true} />)).toMatchSnapshot();
  })
})
