import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppData } from '~/client/context/AppStateProvider';
import Data from '../Data/Data';

type CheckboxProps = {
  index: number;
};

const CheckboxStyle = styled.div`
  font-size: 1.5rem;
  width: 2rem;
  height: 2rem;
`;

const Checkbox = ({ index }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const { appData, setAppData } = useAppData();
  const switches = appData.checkboxes;
  useEffect(() => {
    switches[index] = isChecked;
    setAppData({
      ...appData,
      checkboxes: switches,
    });
  }, [isChecked]);
  return (
    <CheckboxStyle>
      <label>{`${index}`}</label>
      <input
        checked={isChecked}
        type="checkbox"
        onChange={() => {
          setIsChecked(prev => !prev);
        }}
      />
    </CheckboxStyle>
  );
};
export default Checkbox;
