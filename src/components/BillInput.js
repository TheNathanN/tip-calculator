import React from 'react';
import styled from 'styled-components';

const BillInput = ({ bill, setBill }) => {
  const billHandler = e => {
    setBill(e.target.value);
  };

  return (
    <Container>
      <h6>Bill</h6>
      {!bill || bill === '0' ? (
        <input
          className='error'
          type='number'
          placeholder='0'
          onChange={billHandler}
        />
      ) : (
        <input type='number' placeholder='0' onChange={billHandler} />
      )}
    </Container>
  );
};

export default BillInput;

//Styles

const Container = styled.div`
  h6 {
    margin-bottom: 0.4rem;
  }

  input {
    font-family: 'Space Mono', monospace;
    color: hsl(183, 100%, 15%);
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
    height: 3rem;
    width: 100%;
    background: hsl(189, 41%, 90%);
    border: 2px solid hsl(189, 41%, 90%);
    border-radius: 4px;
    padding: 1rem;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: hsl(172, 67%, 45%);
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
`;
