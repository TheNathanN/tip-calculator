import React from 'react';
import styled from 'styled-components';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <Container>
      <AppContainer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
