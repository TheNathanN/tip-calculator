import React from 'react';
import styled from 'styled-components';

const Results = ({ tipAmount, totalAmount }) => {
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
            <p>${totalAmount}</p>
          </div>
        </div>
      </div>
      <div className='reset-btn'>Reset</div>
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
  padding: 1.8rem 2rem 3rem;

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
        font-size: 2.7rem;
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
      color: hsl(185, 41%, 84%);
    }
  }

  @media screen and (max-width: 1123px) {
    .container {
      .result {
        p {
          font-size: 2.5rem;
        }
      }
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
      .result {
        p {
          font-size: 2.5rem;
        }
      }
    }

    .reset-btn {
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 604px) {
    padding: 2rem;
    justify-content: center;
    align-items: center;
    .container {
      .result {
        p {
          font-size: 1.5rem;
        }
      }
    }
    .reset-btn {
      margin-top: 1rem;
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
  }
`;
