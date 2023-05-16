import renderer from 'react-test-renderer';
import InitialPage from '.';

describe('InitialPage', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<InitialPage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
