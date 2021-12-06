import { shallow } from 'enzyme'
import { Card } from '../../app/components/Card'

describe('Card', () => {
  it('snapshot matches', () => {
    expect(
      shallow(<Card title="title" subtitle="subtitle" image={require('../../app/assets/jacket.jpg')} />)
    ).toMatchSnapshot();
  });
});
