import renderer from 'react-test-renderer';
import DataSection from '.';

describe('Checkbox', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<DataSection />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
