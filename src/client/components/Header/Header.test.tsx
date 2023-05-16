import renderer from 'react-test-renderer';
import Header from './';

describe('Header', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Header />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
