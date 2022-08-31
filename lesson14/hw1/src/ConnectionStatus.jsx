import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setSstatus] = useState({ connection: true });

  useEffect(() => {
    const { onLine } = window.navigator;
    setSstatus({ connection: onLine });
    const handleConnection = e => {
      const { onLine } = e.target;
      setSstatus({ connection: onLine });
    };
    window.addEventListener('online', handleConnection);
    window.addEventListener('offline', handleConnection);

    return () => {
      window.removeEventListener('online', handleConnection);
      window.removeEventListener('offline', handleConnection);
    };
  }, [status.connection]);

  const { connection } = status;

  return connection ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;
