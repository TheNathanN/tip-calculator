import React from 'react';
import SelectTip from './SelectTip';

const SelectTipState = ({ tipPercent, setTipPercent }) => {
  return (
    <div>
      <SelectTip setTipPercent={setTipPercent} />
    </div>
  );
};

export default SelectTipState;
