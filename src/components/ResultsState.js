import React from 'react';
import Results from './Results';

const ResultsState = ({
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
  const tipAmount = tipTotal.toFixed(2);
  const totalAmount = personTotal.toFixed(2);
  return (
    <div>
      <Results tipAmount={tipAmount} totalAmount={totalAmount} />
    </div>
  );
};

export default ResultsState;
