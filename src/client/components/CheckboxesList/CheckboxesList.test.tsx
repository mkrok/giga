import renderer from 'react-test-renderer';
import CheckboxesList from '.';

describe('CheckboxesList', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<CheckboxesList />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
