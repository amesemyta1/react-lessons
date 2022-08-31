import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState({ connection: true });
  const { connection } = status;

  useEffect(() => {
    // const { onLine } = window.navigator;
    // setStatus({ connection: onLine });
    const handleConnection = e => {
      const { onLine } = e.target.navigator;
      return setStatus({ connection: onLine });
    };

    window.addEventListener('online', handleConnection);
    window.addEventListener('offline', handleConnection);

    return () => {
      window.removeEventListener('online', handleConnection);
      window.removeEventListener('offline', handleConnection);
    };
  }, []);

  return connection ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;
