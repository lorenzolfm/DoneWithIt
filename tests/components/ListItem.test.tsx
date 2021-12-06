import { shallow } from 'enzyme';
import { ListItem } from '../../app/components/ListItem';

describe('ListItem', () => {
  it('matches snapshot', () => {
    expect(
      shallow(
        <ListItem
          title="test-title"
          subtitle="test-subtitle" 
          image={require('../../app/assets/jacket.jpg')}
          />
       )
    ).toMatchSnapshot();
  });
});
