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

const Container = styled.div`
  input {
    font-family: 'Space Mono', monospace;
    font-weight: bold;
    text-align: right;
    height: 30px;
    width: 220px;
    background: hsl(189, 41%, 97%);
    border: 2px solid hsl(189, 41%, 97%);
    border-radius: 3px;
  }
`;
