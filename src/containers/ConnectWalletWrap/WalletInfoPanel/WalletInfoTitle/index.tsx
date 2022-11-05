import React from 'react';
import { useWeb3React } from '@web3-react/core';

import { getConnectorName } from '../../utils';

import MetamaskSVG from '_src/assets/images/metamask.svg';
import WalletConnectSVG from '_src/assets/images/walletConnect.svg';

import './index.less';

export interface IWalletInfoTitle {}

const WalletIcons = {
  MetaMask: <MetamaskSVG width={24} height={24} style={{ marginRight: '4px' }} />,
  WalletConnect: WalletConnectSVG,
};

const WalletInfoTitle: React.FC<IWalletInfoTitle> = () => {
  const { connector, account } = useWeb3React();

  return (
    <div className="wallet-info-title">
      {WalletIcons[getConnectorName(connector)]}
      <div>{`${String(account).slice(0, 5)}...${String(account).slice(-4)}`}</div>
    </div>
  );
};

WalletInfoTitle.defaultProps = {};

export default WalletInfoTitle;
