import React from 'react';
import styled from 'styled-components';
import BillInput from './BillInput';
import SelectTip from './SelectTip';
import People from './People';
import Results from './Results';

const AppContainer = () => {
  return (
    <Container>
      <img src='/images/logo.svg' alt='' />
      <AppComponents>
        <BillInput />
        <SelectTip />
        <People />
        <Results />
      </AppComponents>
    </Container>
  );
};

export default AppContainer;

const Container = styled.div``;

const AppComponents = styled.div``;
