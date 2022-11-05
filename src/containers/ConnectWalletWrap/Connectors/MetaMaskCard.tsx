import React from 'react';

import { hooks, metaMask } from './metaMask';
import MetamaskSVG from '_src/assets/images/walletMetamask.svg';

import './index.less';

const { useChainId, useIsActivating, useIsActive } = hooks;

export interface IMetaMaskCard {
  onClick?: (flag: string) => void;
}

const MetaMaskCard: React.FC<IMetaMaskCard> = ({ onClick }) => {
  return (
    <div
      className="connect-with-status"
      onClick={() => {
        onClick('Metamask');
        // metaMask.activate();
      }}
    >
      <MetamaskSVG width="66" height="66" style={{ marginRight: '16px' }} />
      <span>Metamask</span>
    </div>
  );
};

MetaMaskCard.defaultProps = {
  onClick: () => {},
};

export default MetaMaskCard;
