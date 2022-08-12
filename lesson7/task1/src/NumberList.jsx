import React from 'react';

// class NumberList extends Component

const NumberList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default NumberList;
