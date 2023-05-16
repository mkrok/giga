import renderer from 'react-test-renderer';
import Checkbox from '.';

describe('Checkbox', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Checkbox index={0} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
