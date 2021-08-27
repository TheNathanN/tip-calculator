import React, { useState } from 'react';
import styled from 'styled-components';

const SelectTip = ({ tipPercent, setTipPercent }) => {
  const [customVal, setCustomVal] = useState('');

  const fiveHandler = () => {
    setTipPercent('5');
    setCustomVal('');
  };
  const tenHandler = () => {
    setTipPercent('10');
    setCustomVal('');
  };
  const fifteenHandler = () => {
    setTipPercent('15');
    setCustomVal('');
  };
  const twentyFiveHandler = () => {
    setTipPercent('25');
    setCustomVal('');
  };
  const fiftyHandler = () => {
    setTipPercent('50');
    setCustomVal('');
  };
  const resetHandler = () => {
    setTipPercent('0');
    setCustomVal('');
  };

  const setCustomTipVal = val => {
    setTipPercent(val);
  };

  const customHandler = e => {
    const input = e.target.value;
    setCustomVal(input);
    setCustomTipVal(input);
  };

  console.log(tipPercent);
  return (
    <Container>
      <h6>Select Tip %</h6>
      <div className='btn-container'>
        <div className='split-btns main'>
          <div className='btn' onClick={fiveHandler}>
            5%
          </div>
          <div className='btn' onClick={tenHandler}>
            10%
          </div>
          <div className='btn' onClick={fifteenHandler}>
            15%
          </div>
          <div className='btn hidden' onClick={twentyFiveHandler}>
            25%
          </div>
          <div className='btn hidden' onClick={fiftyHandler}>
            50%
          </div>
          {!tipPercent || tipPercent === '0' ? (
            <input
              type='number'
              placeholder='Custom'
              className='btn custom-btn hidden error'
              onChange={customHandler}
              value={customVal}
            />
          ) : (
            <input
              type='number'
              placeholder='Custom'
              className='btn custom-btn hidden'
              onChange={customHandler}
              onClick={resetHandler}
              value={customVal}
            />
          )}
        </div>
        <div className='split-btns'>
          <div className='btn hide' onClick={twentyFiveHandler}>
            25%
          </div>
          <div className='btn hide' onClick={fiftyHandler}>
            50%
          </div>
          {!tipPercent || tipPercent === '0' ? (
            <input
              type='number'
              placeholder='Custom'
              className='btn custom-btn hide error'
              onChange={customHandler}
              value={customVal}
            />
          ) : (
            <input
              type='number'
              placeholder='Custom'
              className='btn custom-btn hide'
              onChange={customHandler}
              onClick={resetHandler}
              value={customVal}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default SelectTip;

//Styles

const Container = styled.div`
  margin: 2rem 0;

  h6 {
    margin-bottom: 0.4rem;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    .hidden {
      display: none;
    }
  }

  .split-btns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 4px;
    background: hsl(183, 100%, 15%);
    text-align: center;
    width: 7rem;
    height: 2.8rem;
    cursor: pointer;
    transition: 0.2s ease-out;

    &:hover {
      background: hsl(185, 41%, 84%);
      color: hsl(183, 100%, 15%);
    }

    &:active {
      background: hsl(172, 67%, 45%);
      color: hsl(183, 100%, 15%);
    }
  }

  .custom-btn {
    font-family: 'Space Mono', monospace;
    font-size: 1.2rem;
    color: #3d6666;
    background: hsl(189, 41%, 90%);
    border: 2px solid hsl(189, 41%, 90%);

    &:focus {
      outline: none;
      border-color: hsl(172, 67%, 45%);
    }

    &:hover {
      background: hsl(189, 41%, 90%);
    }

    &::-webkit-input-placeholder {
      color: hsl(184, 14%, 56%);
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }

    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .error {
    &:focus {
      outline: none;
      border-color: red;
    }
  }

  @media screen and (max-width: 1340px) {
    .btn {
      width: 5.5rem;
    }
  }

  @media screen and (max-width: 1243px) {
    .btn {
      width: 5.5rem;
    }
  }

  @media screen and (max-width: 1170px) {
    .btn {
      width: 4.5rem;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .btn {
      width: 4rem;
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 950px) {
    margin-bottom: 0;
    .btn {
      width: 3.5rem;
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 860px) {
    .btn {
      width: 3rem;
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 790px) {
    .main {
      width: 100%;
      justify-content: space-around;
    }
    .split-btns {
      flex-wrap: wrap;

      .hide {
        display: none;
      }
      .hidden {
        justify-content: center;
        align-items: center;
        display: flex;
      }
    }
    .btn {
      width: 7.5rem;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 750px) {
    .btn {
      width: 10.5rem;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 705px) {
    .btn {
      width: 9rem;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 627px) {
    .btn {
      width: 8rem;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 568px) {
    .btn {
      width: 7rem;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 516px) {
    .btn {
      width: 6rem;
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 465px) {
    .btn {
      width: 5.5rem;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 348px) {
    margin: 0rem 0;
    .split-btns {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 264px) {
    .btn {
      width: 5rem;
      font-size: 1rem;
    }
  }
`;
