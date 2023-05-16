import { useRef } from 'react';
import styled from 'styled-components';
import Checkbox from '../Checkbox/Checkbox';
import { SIZE } from '~/config/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #222;
  color: #ccc;
  padding: 1rem;
  width: 100%;
`;

const CheckboxesList = () => {
  const ref = useRef(null);
  return (
    <Wrapper>
      {Array.from(Array(SIZE).keys()).map(index => (
        <Checkbox index={index} key={`checkbox-${index + 1}`} />
      ))}
    </Wrapper>
  );
};

export default CheckboxesList;
