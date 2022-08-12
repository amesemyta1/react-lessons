import React from 'react';

// class NumberList extends Component

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
