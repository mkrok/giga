import styled, { createGlobalStyle } from 'styled-components';
import Header from '~/client/components/Header/Header';
import CheckboxesList from '~/client/components/CheckboxesList/CheckboxesList';
import DataSection from '~/client/components/DataSection/DataSection';
import Error from '~/client/components/Error/Error';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: black;
  }
  a {
    color: lightgray;
  }
  a:hover {
    color: grey;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  background-color: #222;
  color: #ccc;
  overflow: hidden;
  margin: auto;
  align-items: center;
`;

const InitialPage = () => (
  <>
    <GlobalStyle />
    <PageWrapper>
      <Header />
      <CheckboxesList />
      <DataSection />
      <Error />
    </PageWrapper>
  </>
);

export default InitialPage;
