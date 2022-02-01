import { shallow } from 'enzyme';
import { OfflineNotice } from '../../app/components/OfflineNotice';

describe('OfflineNotice', () => {
  it('snapshot matches', () => {
    expect(
      shallow(<OfflineNotice />)
    ).toMatchSnapshot();
  });
});
