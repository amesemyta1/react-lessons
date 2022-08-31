import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, seSstatus] = useState(true);

  useEffect(() => {
    const { onLine } = window.navigator;
    seSstatus({ connection: onLine });
    const handleConnection = e => {
      const { onLine } = e.target;
      seSstatus({ connection: onLine });
    };
    window.addEventListener('online', handleConnection);
    window.addEventListener('offline', handleConnection);

    return () => {
      window.removeEventListener('online', handleConnection);
      window.removeEventListener('offline', handleConnection);
    };
  }, []);

  const { connection } = status;

  return connection ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;
