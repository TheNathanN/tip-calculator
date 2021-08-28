import React, { useEffect } from 'react';
import styled from 'styled-components';

const Results = ({
  bill,
  setBill,
  tipPercent,
  setTipPercent,
  people,
  setPeople,
  tipTotal,
  setTipTotal,
  personTotal,
  setPersonTotal,
}) => {
  //Convert Inputs into Numbers
  const billVal = Number(bill);
  const tipPercentVal = Number(tipPercent);
  const peopleVal = Number(people);
  const tipVal = Number(tipTotal);

  //Set useEffect to Update State
  useEffect(() => {
    const getTipTotal = (billVal, tipPerc) => {
      setTipTotal((tipPerc / 100) * billVal);
    };

    const getPersonTotal = (bill, tip, peopleCount) => {
      setPersonTotal((bill + tip) / peopleCount);
    };

    getTipTotal(billVal, tipPercentVal);
    getPersonTotal(billVal, tipVal, peopleVal);
  }, [billVal, peopleVal, tipPercentVal, tipVal, setPersonTotal, setTipTotal]);

  //Input Handlers
  const resetInputs = () => {
    setBill('');
    setTipPercent('');
    setPeople('');
  };

  //Format Outputs
  const tipAmount = tipTotal.toFixed(2);
  const totalAmount = personTotal.toFixed(2);

  return (
    <Container>
      <div className='results-container'>
        <div className='container'>
          <div className='label-container'>
            <h6>Tip Amount</h6>
            <p>/ person</p>
          </div>
          <div className='result'>
            <p>${tipAmount}</p>
          </div>
        </div>
        <div className='container'>
          <div className='label-container'>
            <h6>Total</h6>
            <p>/ person</p>
          </div>
          <div className='result'>
            {peopleVal === 0 ? <p>$0.00</p> : <p>${totalAmount}</p>}
          </div>
        </div>
      </div>
      <div className='btn-container'>
        <div className='reset-btn' onClick={resetInputs}>
          Reset
        </div>
      </div>
    </Container>
  );
};

export default Results;

//Styles

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: hsl(183, 100%, 15%);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 1.8rem 2rem;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    .label-container {
      width: 8rem;
    }

    h6 {
      color: white;
    }

    p {
      color: hsl(184, 14%, 56%);
      font-family: 'Space Mono', monospace;
      font-size: 0.7rem;
      font-weight: bold;
    }

    .result {
      p {
        color: hsl(172, 67%, 45%);
        font-size: 2.2rem;
      }
    }
  }

  .reset-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: hsl(184, 14%, 56%);
    background: hsl(183deg 88% 21%);
    width: 100%;
    height: 2.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-out;

    &:hover {
      background: hsl(183deg 75% 9%);
      color: hsl(183deg 88% 21%);
    }

    &:active {
      color: hsl(183, 100%, 15%);
      background: hsl(172, 67%, 45%);
    }
  }

  @media screen and (max-width: 1075px) {
    .container {
      .result {
        p {
          font-size: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 980px) {
    .container {
      .result {
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 790px) {
    padding: 1rem 2rem;
    margin-bottom: 3rem;

    .container {
      margin-bottom: 0.5rem;
    }

    .reset-btn {
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 604px) {
    padding: 2rem;
    justify-content: center;
    align-items: center;

    .reset-btn {
      margin-top: 1rem;
      padding: 0 6rem;
    }
  }
  @media screen and (max-width: 462px) {
    .container {
      align-content: space-between;
      .result {
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media screen and (max-width: 429px) {
    .contianer {
      h6 {
        font-size: 0.7rem;
      }
    }
    .label-cotainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .reset-btn {
      padding: 0 3rem;
    }
  }
`;
