import React from 'react';
import { useWeb3React } from '@web3-react/core';

import './index.less';

export interface IWalletInfoMenu {}
const WalletInfoMenu: React.FC<IWalletInfoMenu> = () => {
  const { connector } = useWeb3React();

  return (
    <div className="wallet-info-menu">
      <div
        className="menu-item"
        onClick={() => {
          connector?.deactivate ? connector.deactivate() : connector.resetState();
        }}
      >
        Disconnect
      </div>
    </div>
  );
};

WalletInfoMenu.defaultProps = {};

export default WalletInfoMenu;
