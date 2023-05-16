import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppData } from '~/client/context/AppStateProvider';
import { DataType } from '~/client/context/@types.context';
import { DATA_LENGTH } from '~/config/constants';

const DataStyle = styled.div`
  width: 240px;
  height: 240px;
  min-width: 240px;
  min-height: 240px;
  background-color: black;
  color: #aaa;
  margin: 1rem;
  overflow-y: scroll;
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const DataHeader = styled.div`
  border-bottom: 1px solid #aaa;
  margin-bottom: 1rem;
`;

type DataProps = {
  index: number;
};

const Data = ({ index }: DataProps) => {
  const { appData, setAppData } = useAppData();
  const [letters, setLetters] = useState([]);
  const { data } = appData;

  let newLetters = letters;
  let newData: DataType[] = data;

  useEffect(() => {
    const timer = setInterval(() => {
      fetch('/data', {
        headers: {
          'Data-Stream': `${index}`,
        },
      })
        .then(response => response.json())
        .then(content => {
          newLetters = [...newLetters, content];
          if (newLetters.length > DATA_LENGTH) {
            newLetters.shift();
          }
          setLetters(newLetters);
        })
        .catch(error => setAppData({ ...appData, error: true, errorMessage: error.message }));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (letters.length) {
      newData[index] = letters;
      setAppData({ ...appData, data: newData });
    }
  }, [letters.length]);

  return (
    <DataStyle>
      <DataHeader>{`Data stream: ${index}`}</DataHeader>
      {data[index].map((letter, index) => (
        <div key={`letter-${index + 1}`}>{`${letter.letter} - ${letter.letter_index}`}</div>
      ))}
    </DataStyle>
  );
};

export default Data;
