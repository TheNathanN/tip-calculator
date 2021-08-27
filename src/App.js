import React, { useState } from 'react';
import styled from 'styled-components';

import BillInputState from './components/BillInputState';
import SelectTipState from './components/SelectTipState';
import PeopleState from './components/PeopleState';
import ResultsState from './components/ResultsState';

function App() {
  //Define the State Variables of App
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);
  const [personTotal, setPersonTotal] = useState(0);

  return (
    <Container>
      <img src='/images/logo.svg' alt='splitter logo' />
      <div className='app-components'>
        <div className='input-section'>
          <BillInputState bill={bill} setBill={setBill} />
          <SelectTipState
            tipPercent={tipPercent}
            setTipPercent={setTipPercent}
          />
          <PeopleState people={people} setPeople={setPeople} />
        </div>
        <div className='output-section'>
          <ResultsState
            bill={bill}
            setBill={setBill}
            tipPercent={tipPercent}
            setTipPercent={setTipPercent}
            people={people}
            setPeople={setPeople}
            tipTotal={tipTotal}
            setTipTotal={setTipTotal}
            personTotal={personTotal}
            setPersonTotal={setPersonTotal}
          />
        </div>
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  color: #3d6666;

  img {
    margin-bottom: 3rem;
  }

  .app-components {
    display: flex;
    padding: 2.5rem;
    border: 1px solid white;
    border-radius: 20px;
    background: white;
    width: 60vw;
    max-width: 855px;
  }

  .input-section {
    margin-right: 2.5rem;
    width: 50%;
  }

  .output-section {
    width: 50%;
  }

  @media screen and (max-width: 790px) {
    height: 100vh;
    img {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .app-components {
      flex-direction: column;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      width: 100vw;
      height: 100vh;
    }
    .input-section {
      width: 100%;
      height: 65%;
      margin-right: 0;
      margin-bottom: 2rem;
    }
    .output-section {
      width: 100%;
      height: 35%;
    }
  }
`;
