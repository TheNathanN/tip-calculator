import React from 'react';
import styled from 'styled-components';

const People = () => {
  return (
    <Container>
      <h6>Number of People</h6>
      <input type='text' placeholder='0' />
    </Container>
  );
};

export default People;

const Container = styled.div`
  margin-bottom: 1rem;
  h6 {
    margin-bottom: 0.4rem;
  }

  input {
    font-family: 'Space Mono', monospace;
    color: hsl(183, 100%, 15%);
    font-size: 1.1rem;
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

  @media screen and (max-width: 790px) {
    margin-bottom: 0;
  }
`;
