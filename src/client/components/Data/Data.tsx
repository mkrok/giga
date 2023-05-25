import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppData } from '~/client/context/AppStateProvider';
import fillGaps from '~/client/functions/fillGaps';

const DataStyle = styled.div`
  width: 240px;
  height: 240px;
  min-width: 240px;
  min-height: 240px;
  background-color: black;
  color: #aaa;
  margin: 1rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const DataHeader = styled.div`
  border-bottom: 1px solid #aaa;
  margin-bottom: 1rem;
  color: white;
`;

const DataContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
`;

type DataProps = {
  index: number;
};

const Data = ({ index }: DataProps) => {
  const { appData, setAppData } = useAppData();
  const { data } = appData;
  const [letters, setLetters] = useState(data[index]);
  const endRef = useRef(null);
  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      fetch(`/letters/${index}`, {
        headers: {
          'Data-Stream': `${index}`,
        },
      })
        .then(response => response.json())
        .then(content => {
          setLetters(previous => {
            if (content.letter_index === 0) {
              return [content];
            } else {
              return [...previous, content].sort((a, b) => a.letter_index - b.letter_index);
            }
          });
        })
        .catch(error => setAppData({ ...appData, error: true, errorMessage: error.message }));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setAppData(previous => {
      previous.data[index] = letters;
      return { ...previous };
    });
    scrollToBottom();
  }, [letters.length]);

  return (
    <DataStyle>
      <DataHeader>{`Data stream: ${index}`}</DataHeader>
      <DataContent>
        {fillGaps(letters).map((letter, index) => `${letter.letter}`)}
        <div ref={endRef} />
      </DataContent>
    </DataStyle>
  );
};

export default Data;
