import { create } from 'react-test-renderer';
import { ListItem } from '../../app/components/ListItem';

describe('ListItem', () => {
  it('matches snapshot', () => {
    expect(
      create(
        <ListItem
          title="test-title"
          subtitle="test-subtitle" 
          image={require('../../app/assets/jacket.jpg')}
        />
       )
    ).toMatchSnapshot();
  });
});
