import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

import './index.less';

export interface IConnectWait {}

const ConnectWait: React.FC<IConnectWait> = () => {
  const { connector } = useWeb3React();
  useEffect(() => {
    connector.activate();
  }, []);

  return (
    <div className="connect-wait">
      <div className="status">Connecting...</div>
    </div>
  );
};

ConnectWait.defaultProps = {};

export default ConnectWait;
