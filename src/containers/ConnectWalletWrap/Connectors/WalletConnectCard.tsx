import React from 'react';

import { hooks, walletConnect } from './walletConnect';
import WalletConnectSVG from '_src/assets/images/walletConnect.svg';

import './index.less';

const { useChainId, useIsActivating, useIsActive } = hooks;

export interface IWalletConnectCard {}

const WalletConnectCard: React.FC<IWalletConnectCard> = () => {
  return (
    <div
      className="connect-with-status"
      onClick={() => {
        walletConnect.activate();
      }}
    >
      <WalletConnectSVG width="60" height="60" style={{ marginRight: '16px' }} />
      <span>WalletConnect</span>
    </div>
  );
};

WalletConnectCard.defaultProps = {
  onClick: () => {},
};

export default WalletConnectCard;
