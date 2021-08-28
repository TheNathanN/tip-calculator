import React from 'react';
import styled from 'styled-components';

const People = ({ people, setPeople }) => {
  const peopleHandler = e => {
    setPeople(e.target.value);
  };

  return (
    <Container>
      <h6>Number of People</h6>
      {!people || people === '0' ? (
        <input
          className='error'
          type='number'
          placeholder='0'
          value={people}
          onChange={peopleHandler}
        />
      ) : (
        <input
          type='number'
          placeholder='0'
          value={people}
          onChange={peopleHandler}
        />
      )}
    </Container>
  );
};

export default People;

//Styles

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
    cursor: pointer;

    &[type='number'] {
      -moz-appearance: textfield;
    }

    &:focus {
      outline: none;
      border-color: hsl(172, 67%, 45%);
    }

    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::-webkit-input-placeholder {
      color: hsl(184, 14%, 56%);
    }
  }

  .error {
    &:focus {
      outline: none;
      border-color: red;
    }
    &::after {
      color: red;
      content: "Can't be zero";
      display: block;
    }
  }

  @media screen and (max-width: 790px) {
    margin-bottom: 0;
  }
`;
