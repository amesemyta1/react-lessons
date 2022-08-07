import React from 'react';

const calculateAge = birthday => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const Greeting = props => {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {calculateAge(props.birthDate)} years old
    </div>
  );
};

export default Greeting;
