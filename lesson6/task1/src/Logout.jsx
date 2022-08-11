import React from 'react';

const Logout = handle => {
  return (
    <button className="logout btn" onClick={handle}>
      Logout
    </button>
  );
};

export default Logout;
