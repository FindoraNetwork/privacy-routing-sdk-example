import React from 'react';
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';

import { hooks as metaMaskHooks, metaMask } from './Connectors/metaMask';
import { hooks as walletConnectHooks, walletConnect } from './Connectors/walletConnect';

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
];

export default function Web3Provider({ children }) {
  return <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>;
}
