import React from 'react';
import styled from 'styled-components';

import BillInput from './components/BillInput';
import SelectTip from './components/SelectTip';
import People from './components/People';
import Results from './components/Results';

function App() {
  return (
    <Container>
      <img src='/images/logo.svg' alt='' />
      <div className='app-components'>
        <BillInput />
        <SelectTip />
        <People />
        <Results />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 3rem;
  }

  .app-components {
    padding: 2rem 8rem;
    border: 1px solid white;
    border-radius: 20px;
    background: white;
  }
`;
