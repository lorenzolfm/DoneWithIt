import { shallow } from "enzyme"
import { UploadScreen } from "../../app/screens/UploadScreen"

describe('UploadScreen', () => {
  it('snapshot matches', () => {
    shallow(<UploadScreen progress={0} visible={true}/>)
  });
});
