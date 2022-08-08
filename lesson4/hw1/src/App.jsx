import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock location="New York" offset={-4} />
      <Clock location="Kyiv" offset={3} />
      <Clock location="London" offset={1} />
    </>
  );
};

export default App;
