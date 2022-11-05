import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Modal } from 'antd';
import useMedia from 'use-media';

import ConnectListPanel from '../ConnectListPanel';
import WalletInfoPanel from '../WalletInfoPanel';
import ConnectWait from '../ConnectWait';
import { useImmerModal } from '_src/hooks';
import { metaMask } from '../Connectors/metaMask';
// import { walletConnect } from '../Connectors/walletConnect';

import './index.less';

export interface IChangeNetwork {}

const ConnectWallet: React.FC<IChangeNetwork> = () => {
  const { isActive, chainId, account } = useWeb3React();
  const [modalState, handleToggleModalQrcode] = useImmerModal({
    list: false,
    wait: false,
  });

  const isH5 = useMedia({ maxWidth: 700 });

  useEffect(() => {
    metaMask.connectEagerly();
    // walletConnect.connectEagerly();
  }, []);

  useEffect(() => {
    if (chainId && account) {
      setTimeout(() => {
        handleToggleModalQrcode('wait', false);
        handleToggleModalQrcode('list', false);
      }, 1500);
    } else {
    }
  }, [chainId, account]);

  // useEffect(() => {
  //   if (error) {
  //     handleToggleModalQrcode('wait', false);
  //   }
  // }, [error]);

  return (
    <section className="connect-wallet">
      {isActive ? (
        <WalletInfoPanel />
      ) : (
        <div
          className="wallet-name"
          onClick={() => {
            handleToggleModalQrcode('list', true);
          }}
        >
          connect
        </div>
      )}

      <Modal
        visible={modalState.list}
        footer={null}
        width={isH5 ? '94%' : 520}
        centered
        closable={false}
        title={null}
        bodyStyle={{ padding: '0' }}
        onCancel={() => {
          handleToggleModalQrcode('list', false);
        }}
      >
        <ConnectListPanel
          onSelect={() => {
            handleToggleModalQrcode('wait', true);
          }}
          onClose={() => {
            handleToggleModalQrcode('list', false);
          }}
        />
      </Modal>

      <Modal
        visible={modalState.wait}
        footer={null}
        width={isH5 ? '94%' : 520}
        centered
        closable={false}
        title={null}
        destroyOnClose
        bodyStyle={{ padding: '0' }}
        maskClosable={false}
        onCancel={() => {
          handleToggleModalQrcode('wait', false);
        }}
      >
        <ConnectWait />
      </Modal>
    </section>
  );
};

ConnectWallet.defaultProps = {};

export default ConnectWallet;
