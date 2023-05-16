import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppData } from '~/client/context/AppStateProvider';

const ErrorStyled = styled.div`
  position: fixed;
  top: calc((100vh - 10em) / 2);
  left: calc((100vw - 22em) / 2);
  border: solid 1px white;
  background-color: #600;
  color: #ccc;
  padding: 1em;
  border-radius: 5px;
  font-size: 1em;
  width: 20em;
  height: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Error = () => {
  const { appData, setAppData } = useAppData();
  const { error, errorMessage } = appData;

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setAppData({ ...appData, error: false, errorMessage: '' });
      }, 5000);
    }
  }, [error]);

  return <>{error && <ErrorStyled id="error">{`Error: ${errorMessage}`}</ErrorStyled>}</>;
};

export default Error;
