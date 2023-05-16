import styled from 'styled-components';
import { useAppData } from '~/client/context/AppStateProvider';
import { SIZE } from '~/config/constants';
import Data from '../Data/Data';

const DataSectionStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DataSection = () => {
  const { appData } = useAppData();
  const { checkboxes } = appData;

  return (
    <DataSectionStyle>
      {Array.from(Array(SIZE).keys()).map(
        index => checkboxes[index] && <Data index={index} key={`data-${index + 1}`} />
      )}
    </DataSectionStyle>
  );
};

export default DataSection;
