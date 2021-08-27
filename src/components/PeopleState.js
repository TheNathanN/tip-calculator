import React from 'react';
import People from './People';

const PeopleState = ({ people, setPeople }) => {
  return (
    <div>
      <People setPeople={setPeople} />
    </div>
  );
};

export default PeopleState;
