import React from 'react';
import BillInput from './BillInput';

const BillInputState = ({ bill, setBill }) => {
  return (
    <div>
      <BillInput setBill={setBill} />
    </div>
  );
};

export default BillInputState;
