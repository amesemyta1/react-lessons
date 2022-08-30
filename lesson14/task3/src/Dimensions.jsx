/* eslint-disable no-debugger */
import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [demensions, setDemensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDemensions({ width: innerWidth, height: innerHeight });
    const handleResize = e => {
      const { innerHeight, innerWidth } = e.target;
      setDemensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      debugger;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { width, height } = demensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
