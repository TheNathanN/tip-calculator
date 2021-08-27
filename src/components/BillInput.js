import React from 'react';
import styled from 'styled-components';

const BillInput = () => {
  return (
    <Container>
      <h6>Bill</h6>
      <input type='text' placeholder='0' />
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

    &::-webkit-input-placeholder {
      color: hsl(184, 14%, 56%);
    }

    &:focus {
      outline: none;
      border-color: hsl(172, 67%, 45%);
    }
  }
`;
